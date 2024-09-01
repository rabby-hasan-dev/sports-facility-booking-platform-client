
 type THeadingProps={
    heading:string;
    subHeading:string;
 }

const HeadingComponent = ({heading, subHeading}:THeadingProps) => {
    return (
        <div className="space-y-3 text-center bg-gray-100 p-5 ">
            <h2 className="text-3xl font-extrabold text-gray-900">{heading} </h2>
            <p className="text-lg text-gray-600 ">{subHeading} </p>
        </div>
    );
};

export default HeadingComponent;