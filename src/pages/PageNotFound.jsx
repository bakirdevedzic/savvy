import { Link } from "react-router-dom";
import Button from "../ui/Button";

function PageNotFound() {
  return (
    <div className="h-[calc(100dvh)] flex items-center flex-col overflow-auto">
      <div className="max-w-[1700px] flex justify-center items-center h-[70px]">
        <img
          alt="image"
          src="../../../public/logo-final-200h.png"
          className="w-[130px] h-[64px] self-start object-cover"
        />
      </div>

      <section className="flex items-center h-screen p-16">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl font-bold">
              Sorry, we couldn&apos;t find this page.
            </p>

            <div className="w-[100%]">
              <Button type="base">
                <Link to="/">Back To Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[100%] flex flex-col justify-center items-center min-h-[200px] justify-items-center bg-primary-black mt-24">
        <div className="text-5xl font-bold text-white">Savvy</div>
        <div className="text-xl font-bold text-white mt-3">
          <a href="https://github.com/bakirdevedzic/savvy/" target="_blank">
            Check out code on GitHub!
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
