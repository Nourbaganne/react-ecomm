import {MdOutlineLocalOffer, MdStar} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-center bg-no-repeat h-screen w-full'>
      <div className='max_padd_container relative top-32 xs:top-52'>
        <h1 className='h1 capitalize max-w-[37rem]'>Digital Shop Hub Junction</h1>
        <p className=''>
          loremLabore id nisi culpa irure. Magna ex ea laboris excepteur sit reprehenderit ipsum ullamco proident cillum. Veniam magna sunt velit aliquip proident esse consectetur. Sit elit officia elit sunt et velit sit consequat laboris tempor. Amet adipisicing reprehenderit fugiat commodo magna occaecat est sit sint velit.
        </p>
        <div>
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className='bold-16 sm:bold-20'> 176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
        </div>
        <div className='max-xs:flex-col flex gap-2'>
          <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
          <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero