import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  
  return(
    <div className="container">
      <footer className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
	<div className="col-md-4 d-flex align-items-center">
	  <Link href="/" className="mx-4 mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
	    <Image
	      src="/NewBuilder.png"
	      alt="builder"
	      width={30}
	      height={30}
	    />
	  </Link>
	  <span className="mb-3 mb-md-0 text-body-secondary">2024 Heavy Duty Camp</span>
	</div>

	<ul className="nav mx-4 col-md-4 justify-content-end list-unstyled d-flex">
	  <li className="ms-3"><Link className="text-body-secondary" href="#">Twitter</Link></li>
	  <li className="ms-3"><Link className="text-body-secondary" href="#">Instagram</Link></li>
	  <li className="ms-3"><Link className="text-body-secondary" href="#">Github</Link></li>
	</ul>
      </footer>
    </div>
  );
}
