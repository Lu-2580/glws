import React, { useEffect, useRef, useState } from 'react';

const TechAgriculture = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 科技农业图片数据
  const techAgricultureImages = [
    {
      id: 1,
      src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20technology%20in%20agriculture%2C%20digital%20orchard%20management%2C%20IoT%20sensors%2C%20professional%20futuristic%20design&image_size=landscape_16_9',
      title: '区块链智能果园',
      description: '利用区块链技术实现果园数据的可信上链和智能管理'
    },
    {
      id: 2,
      src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NFC%20technology%20in%20fruit%20traceability%2C%20smart%20labels%20on%20fruits%2C%20blockchain%20integration%2C%20professional%20design&image_size=landscape_16_9',
      title: 'NFC果品溯源',
      description: '通过NFC标签和区块链技术实现果品全程可追溯'
    },
    {
      id: 3,
      src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20pest%20detection%20system%20with%20blockchain%2C%20computer%20vision%20in%20agriculture%2C%20professional%20futuristic%20design&image_size=landscape_16_9',
      title: 'AI病虫害识别',
      description: '人工智能结合区块链技术实时识别果园害虫，提高防治效率'
    },
    {
      id: 4,
      src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20and%20NFC%20technology%20integration%2C%20smart%20agriculture%20dashboard%2C%20professional%20futuristic%20design&image_size=landscape_16_9',
      title: '区块链-NFC融合平台',
      description: '整合区块链和NFC技术，打造智能农业管理平台'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`tech-agriculture py-20 bg-light ${visible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">科技赋能农业</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            果链卫士利用先进的科技手段，推动农业现代化，实现果园管理的智能化和精细化
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techAgricultureImages.map((image, index) => (
            <div 
              key={image.id}
              className={`tech-agriculture-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechAgriculture;