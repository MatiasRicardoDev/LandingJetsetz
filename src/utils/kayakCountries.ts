export const getKayakCountry = (country = 'US') => {
  //   const country = window.localStorage.getItem('ip.country') ?? 'US';

  switch (country) {
    case 'AR':
      return 'www.kayak.com.ar';
    case 'AU':
      return 'www.kayak.com.au';
    case 'BR':
      return 'www.kayak.com.br';
    case 'CA':
      return 'www.ca.kayak.com';
    case 'CL':
      return 'www.kayak.cl';
    case 'CO':
      return 'www.kayak.com.co';
    case 'DE':
      return 'www.kayak.de';
    case 'ES':
      return 'www.kayak.es';
    case 'FR':
      return 'www.kayak.fr';
    case 'MX':
      return 'www.kayak.com.mx';
    case 'UK':
      return 'www.kayak.co.uk';
    case 'IN':
      return 'www.kayak.co.in';
    case 'NI':
      return 'www.kayak.com.ni';
    case 'NZ':
      return 'www.kayak.co.nz';
    case 'PE':
      return 'www.kayak.com.pe';
    case 'ZA':
      return 'www.kayak.co.za';
    case 'IT':
      return 'www.kayak.it';
    default:
      return 'www.kayak.com';
  }
};
