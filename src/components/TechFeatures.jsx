import React from 'react';

const TechFeatures = () => {
  return (
    <section className="tech-features py-16 bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">核心技术</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            果链卫士融合区块链、NFC和AI技术，打造智能化果园管理和果品溯源平台
          </p>
        </div>

        <div className="row g-8">
          {/* 区块链技术 */}
          <div className="col-lg-4">
            <div className="tech-card bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
              <div className="w-24 h-24 bg-cover bg-center rounded-xl flex items-center justify-center mb-6 mx-auto" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20technology%20abstract%20background%2C%20elegant%20blue%20gradient%2C%20professional%20minimalist%20design&image_size=square)' }}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">区块链技术</h3>
              <p className="text-gray-600 text-center mb-6">
                利用区块链的不可篡改特性，实现果园数据的可信上链，确保溯源信息的真实性和可靠性。
              </p>
              <div className="tech-feature-list space-y-3">
                <div className="py-2 border-b border-gray-100">
                  <span>数据不可篡改</span>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span>去中心化存储</span>
                </div>
                <div className="py-2">
                  <span>智能合约自动执行</span>
                </div>
              </div>
            </div>
          </div>

          {/* NFC技术 */}
          <div className="col-lg-4">
            <div className="tech-card bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
              <div className="w-24 h-24 bg-cover bg-center rounded-xl flex items-center justify-center mb-6 mx-auto" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NFC%20technology%20abstract%20background%2C%20elegant%20orange%20gradient%2C%20professional%20minimalist%20design&image_size=square)' }}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">NFC技术</h3>
              <p className="text-gray-600 text-center mb-6">
                通过NFC标签实现果品的唯一标识，消费者可通过手机轻触即可查询果品的全链路信息。
              </p>
              <div className="tech-feature-list space-y-3">
                <div className="py-2 border-b border-gray-100">
                  <span>一果一码唯一标识</span>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span>快速扫码查询</span>
                </div>
                <div className="py-2">
                  <span>离线可读技术</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI技术 */}
          <div className="col-lg-4">
            <div className="tech-card bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
              <div className="w-24 h-24 bg-cover bg-center rounded-xl flex items-center justify-center mb-6 mx-auto" style={{ backgroundImage: 'url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20abstract%20background%2C%20elegant%20purple%20gradient%2C%20professional%20minimalist%20design&image_size=square)' }}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI技术</h3>
              <p className="text-gray-600 text-center mb-6">
                利用人工智能技术实现果园害虫的智能识别和预测，提高防治效率，减少农药使用。
              </p>
              <div className="tech-feature-list space-y-3">
                <div className="py-2 border-b border-gray-100">
                  <span>实时害虫识别</span>
                </div>
                <div className="py-2 border-b border-gray-100">
                  <span>智能预测分析</span>
                </div>
                <div className="py-2">
                  <span>自动化防治建议</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;