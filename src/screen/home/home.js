import ListIteme from "../../components/listIteme/listIteme"
import Navbar from "../../components/navbar/navbar"

import './home.style.css'
function Home(){
    return<>
           <Navbar/>
         <div class="flex red w-screen flex-row ">
                <div class="w-1/4 flex flex-col items-start ... ml-10 blue">
                <div class="text-xl font-medium text-black mb-4">Split tools</div>
                <ListIteme/>
                <div class="text-xl font-medium text-black mb-4">Other tools</div>
                <ListIteme/>
                <ListIteme/>
                </div>
         </div>
    </>
}
export default Home 