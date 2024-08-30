import { Collapse, CollapseProps } from "antd";
import { useEffect, useState } from "react";


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


    const items: CollapseProps['items'] = faq?.map((item, index) => (
        {
            key: index + 1,
            label: item.question,
            children: item.answer,

        }
    ))








    return (

        <div className="space-y-8 my-5">
            <div className="space-y-3">
                <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
                <p className="text-lg text-gray-600 ">Frequently questions answer below .</p>
            </div>

            <Collapse items={items} defaultActiveKey={['1']} />;

        </div >
    );
};

export default FAQ;