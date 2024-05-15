import { Image } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import dgspeech from '../../assets/DGSpeech.png';

const Abstract: React.FC = () => {
  return (
    <>
      <Title level={3} style={{ marginTop: 0 }}>
        Abstract
      </Title>

      <div
        style={{ width: '100%', maxWidth: '840px', margin: 'auto', marginBottom: '8px' }}
      >
        <Image width={'100%'} src={dgspeech} style={{ padding: '8px 24px 12px' }} />
      </div>
      <Paragraph style={{ textAlign: 'justify' }}>
        Ut ex nulla laborum id minim eu in elit labore sint cillum dolore tempor elit.
        Ipsum esse irure dolore magna ut labore laboris excepteur et. Veniam fugiat
        excepteur ad ad laborum consequat aliquip velit ut. Non fugiat occaecat aliqua
        dolore do minim sint occaecat eiusmod excepteur magna irure laborum quis. Id quis
        esse amet deserunt velit amet. Dolor laborum non deserunt cupidatat voluptate amet
        velit magna non voluptate id. Dolore ea ad in fugiat minim voluptate eiusmod
        occaecat cillum culpa eiusmod nulla. Consectetur labore minim esse deserunt duis
        laboris officia duis et labore veniam. Occaecat amet velit consequat incididunt
        excepteur anim dolor. Ullamco duis magna commodo nisi ipsum eu ad occaecat dolore
        pariatur. Consequat eu aliquip aliqua commodo.
      </Paragraph>
    </>
  );
};

export default Abstract;
