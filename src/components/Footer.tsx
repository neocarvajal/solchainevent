import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  
  return(
     <footer className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center">
	<div className="col-md-4 d-flex align-items-center">
	  <Link href="/" className="mx-4 mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
	    <Image
	      src="/NewBuilder.png"
	      alt="builder"
	      width={30}
	      height={30}
	    />
	  </Link>
	  <span className="mb-3 mb-md-0">2024 Heavy Duty Camp</span>
	</div>

	<ul className="nav mx-4 col-md-4 justify-content-end list-unstyled d-flex">
	  <li className="ms-3"><Link className="text-white" href="https://x.com/solchainevent" target="_blank">Twitter</Link></li>
	  <li className="ms-3"><Link className="text-white" href="https://instagram.com/solchainevent" target="_blank">Instagram</Link></li>
	  <li className="ms-3"><Link className="text-white" href="https://github.com/solchainevent" target="_blank">Github</Link></li>
	</ul>
      </div>
    </footer>
  );
}
