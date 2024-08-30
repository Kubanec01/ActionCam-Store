import Spline from "@splinetool/react-spline";


export function CameraFeature () {
    return (
        <div className="flex justify-between max-w-[1300px] mx-auto mt-10">
        <div className="w-[50%]">
          <h1 className="text-7xl text-[#d0d0d05e] mt-[110px]">Nocturnal <span className="text-[#ffffffbe]">Brilliance</span></h1>
          <p className="text-2xl text-[#ffffff9e] mt-[80px] w-[85%]">
            Unlock the beauty of night with exceptional lens clarity. Perfect
            for capturing vibrant details and deep contrasts in the darkest
            conditions.
          </p>
        </div>
        <div className="h-[600px] w-[600px]">
          <Spline scene="https://prod.spline.design/l9o5Bi-2FnsqSQgR/scene.splinecode" />
        </div>
      </div>
    )
}