import Vidbg from "./assets/videos/backgroundvid.mp4"
  const Videobg = () => {
    return (
    <div className="vidbg">
        <video  autoPlay loop muted>
            <source src={Vidbg} />
        </video>
    </div>
)}
  export default Videobg;



  