import { Collapse, CollapseProps } from "antd";
import { useEffect, useState } from "react";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import { IFaq } from "../../../../types/extra.type";


const FAQ = () => {

    const [faq, setFaq] = useState([]);
    
    useEffect(() => {

        const faqApi = async () => {

            const res = await fetch('/faq.json');
            const data = await res.json();
            setFaq(data);

        }

        faqApi();


    }, [])

    const items: CollapseProps['items'] = faq?.map((item:IFaq, index) => (
        {
            key: index + 1,
            label: item.question,
            children: item.answer,

        }
    ))

    return (

        <div className="space-y-8 my-5 max-w-7xl mx-auto">
            <HeadingComponent heading="Frequently asked questions" subHeading="Frequently questions answer below." />
            <Collapse style={{ background: 'white' }} items={items} defaultActiveKey={['1']} />;

        </div >
    );
};

export default FAQ;