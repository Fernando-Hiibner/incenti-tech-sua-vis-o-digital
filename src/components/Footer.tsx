const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto grid w-full gap-2 px-4 text-sm text-muted-foreground text-center md:grid-cols-[1fr_auto_1fr] md:items-center">
      <div className="font-heading md:justify-self-start">
        <span className="text-primary font-bold">Incenti</span> Tech
      </div>
      <p className="md:justify-self-center">63.404.846/0001-07</p>
      <p className="md:justify-self-end md:text-right">© {new Date().getFullYear()} Incenti Tech. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
