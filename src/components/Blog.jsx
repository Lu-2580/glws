import React from 'react';

const Blog = () => {
  // 博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: '果链卫士：区块链技术在果园管理中的应用',
      date: '2026-02-20',
      excerpt: '探索区块链技术如何为果园管理带来革命性变化，实现数据可信上链和全链路溯源。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20technology%20in%20agriculture%2C%20smart%20orchard%2C%20digital%20farming&image_size=landscape_16_9',
      category: '技术应用',
      url: '/blog/blockchain-in-orchard-management'
    },
    {
      id: 2,
      title: 'NFC技术如何实现果品全程溯源',
      date: '2026-02-15',
      excerpt: '了解NFC技术在果品溯源中的应用，如何实现从果园到餐桌的全程可追溯。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NFC%20technology%20in%20fruit%20traceability%2C%20smart%20label%2C%20supply%20chain&image_size=landscape_16_9',
      category: '技术应用',
      url: '/blog/nfc-for-fruit-traceability'
    },
    {
      id: 3,
      title: 'AI智能识别系统在果园害虫防治中的作用',
      date: '2026-02-10',
      excerpt: 'AI技术如何帮助果农实时识别果园害虫，提高防治效率，减少农药使用。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20pest%20detection%20in%20orchard%2C%20smart%20farming%2C%20computer%20vision&image_size=landscape_16_9',
      category: '技术应用',
      url: '/blog/ai-pest-detection-in-orchards'
    },
    {
      id: 4,
      title: '数字技术赋能乡村振兴：果链卫士的实践',
      date: '2026-02-05',
      excerpt: '果链卫士如何通过数字技术助力乡村振兴，提高果农收入，推动水果产业高质量发展。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20technology%20in%20rural%20revitalization%2C%20smart%20agriculture%2C%20fruit%20farm&image_size=landscape_16_9',
      category: '行业动态',
      url: '/blog/digital-technology-for-rural-revitalization'
    }
  ];

  return (
    <section className="blog-section py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">最新博客</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            了解果链卫士的最新技术应用、行业动态和实践案例
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-3 col-md-6">
              <div className="blog-card bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={post.url} className="text-primary font-medium hover:underline transition-colors">
                    阅读更多
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-primary btn-lg rounded-full px-8 py-3 font-medium hover:bg-primary-dark transition-colors">
            查看更多博客
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;