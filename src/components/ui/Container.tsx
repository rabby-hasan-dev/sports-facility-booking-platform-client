import { ReactNode } from "react";


const Container = ({ children }: { children: ReactNode }) => {
    return (
        <section className="max-w-screen-xl mx-auto  ">
            {children}
        </section>
    );
};

export default Container;