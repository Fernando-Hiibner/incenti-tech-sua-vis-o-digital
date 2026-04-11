# SEO Report

## Corrigido no codigo

- SEO da home implementado com `title`, `meta description`, `keywords`, `canonical`, `hreflang`, `robots` e Open Graph/Twitter.
- JSON-LD adicionado para `Organization`, `WebSite`, `ProfessionalService` e `Service`.
- Referencias publicas a `Lovable` removidas dos metadados.
- `favicon.ico` referenciado corretamente nas entradas HTML.
- `sitemap.xml` criado em [public/sitemap.xml](/c:/IncentiTech/incenti-tech-sua-vis-o-digital/public/sitemap.xml).
- `robots.txt` atualizado com a URL do sitemap.
- `ads.txt` criado em [public/ads.txt](/c:/IncentiTech/incenti-tech-sua-vis-o-digital/public/ads.txt).
- `404.html` estatico criado em [public/404.html](/c:/IncentiTech/incenti-tech-sua-vis-o-digital/public/404.html) e a 404 React foi melhorada.
- E-mail exposto no HTML foi ofuscado.
- `@import` de Google Fonts removido do CSS e trocado por `preconnect` + `preload` nas paginas HTML.
- `IntegrationHub` saiu do bundle inicial com code splitting por rota.
- A home deixou de carregar o PNG de logo de 180 KB no topo.

## Resultado tecnico observado

- Antes do split, o bundle principal estava em torno de `560 kB` minificado.
- Depois das alteracoes, o bundle principal caiu para cerca de `320 kB`, com `Index` e `IntegrationHub` separados.
- O build de producao esta passando com `npm run build`.

## Ainda depende do servidor

### 1. Canonicalizacao de URL

O problema entre `https://incentitech.com.br/en/` e `https://www.incentitech.com.br/en/` so se resolve com redirect no Nginx.

Use `www` -> sem `www`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.incentitech.com.br incentitech.com.br;
    return 301 https://incentitech.com.br$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.incentitech.com.br;

    ssl_certificate /etc/letsencrypt/live/incentitech.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/incentitech.com.br/privkey.pem;

    return 301 https://incentitech.com.br$request_uri;
}
```

### 2. HTTP/2

So o servidor habilita HTTP/2. No bloco HTTPS principal:

```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

### 3. HSTS

So o servidor pode enviar `Strict-Transport-Security`.

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

Ative isso apenas depois de confirmar que tudo responde corretamente em HTTPS.

### 4. Cache para CSS, JS e imagens

Esses headers tambem sao de servidor:

```nginx
location ~* \.(css|js)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000, immutable";
}

location ~* \.(png|jpg|jpeg|gif|svg|webp|ico)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000, immutable";
}
```

### 5. `ads.txt` com `Content-Type` correto

O arquivo ja foi criado. Se o servidor ainda devolver HTML, o fallback da aplicacao esta interceptando a rota. Garanta prioridade para o arquivo:

```nginx
location = /ads.txt {
    default_type text/plain;
    try_files $uri =404;
}
```

### 6. Pagina 404 do servidor

O arquivo estatico ja foi criado, mas o Nginx precisa usa-lo:

```nginx
error_page 404 /404.html;

location = /404.html {
    internal;
}
```

### 7. Rotas SPA por idioma

Como o front usa `BrowserRouter`, as rotas client-side precisam de fallback para o HTML certo:

```nginx
location /en/ {
    try_files $uri $uri/ /en/index.html;
}

location /pt-br/ {
    try_files $uri $uri/ /pt-br/index.html;
}
```

Sem isso, refresh direto em rotas como `/en/integration-hub/` pode quebrar.

## Observacoes finais

- O item de "render-blocking resources" foi reduzido com a troca do carregamento de fontes e com a queda do JS inicial, mas nao zera totalmente em uma SPA Vite sem SSR.
- O item de "modern image format" foi tratado na home eliminando a imagem pesada do topo. Na pagina `Integration Hub`, ainda existem logos PNG pequenos e imagens remotas de terceiros; se quiser elevar mais a nota, vale internalizar essas imagens e gerar `webp` no pipeline de assets.
- Se quiser, o proximo passo pode ser eu montar um arquivo de exemplo completo do `server` Nginx para publicar isso no VPS da Hostinger.
