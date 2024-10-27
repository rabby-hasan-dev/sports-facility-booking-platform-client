import { Collapse, CollapseProps } from "antd";
import { useEffect, useState } from "react";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import { IFaq } from "../../../../types/extra.type";
import Container from "../../../../components/ui/Container";


const FAQSection = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {

        const faqApi = async () => {

            const res = await fetch('/faq.json');
            const data = await res.json();
            setFaq(data);

        }

        faqApi();


    }, [])

    const items: CollapseProps['items'] = faq?.map((item: IFaq, index) => (
        {
            key: index + 1,
            label: item.question,
            children: item.answer,

        }
    ))

    return (

        <Container>
            <div className="space-y-8 container  ">
                <HeadingComponent heading="Frequently asked questions" subHeading="Frequently questions answer below." />
                <div >
                    <div className="w-full px-4 mb-8">

                        <Collapse style={{ background: 'white' }} items={items} defaultActiveKey={['1']} />;

                    </div>
                </div>

            </div >
        </Container>
    );
};

export default FAQSection;