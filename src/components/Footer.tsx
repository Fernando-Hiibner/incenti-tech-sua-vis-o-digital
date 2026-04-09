const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col items-center gap-2 text-sm text-muted-foreground text-center">
      <div className="font-heading">
        <span className="text-primary font-bold">Incenti</span> Tech
      </div>
      <p>CNPJ: 63.404.846/0001-07</p>
      <p>© {new Date().getFullYear()} Incenti Tech. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
