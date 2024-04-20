import Nav from "./Nav"
import MobileNav from "./MobileNav"


const header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-x-6">
          <Nav containerStyles='hidden xl:flex gap-x-8 items-center'/>
        </div>
        <div className="xl:hidden lg:hidden">
          <MobileNav/>
        </div>
        
      </div>
    </div>
  )
}

export default header