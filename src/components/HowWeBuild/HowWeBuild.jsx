import Button from "../common/Button";

const HowWeBuild = () => {
    return (
      <div className="h-full my-20 text-white bg-[url('/HowWeBuild.webp')]  bg-cover bg-center mx-2 lg:mx-0 p-15 rounded-xl">
        <div className="pb-20">
          <h2 className="font-bold text-3xl pb-2">How We Build</h2>
          <p className="max-w-96">
            We prioritize your success, understand your unique needs, and
            deliver tailored solutions that drive your business growth.
          </p>
        </div>

        <Button title={"Lets Chat"} />
      </div>
    );
};

export default HowWeBuild;