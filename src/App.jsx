import React, { useEffect } from 'react'
import Blog from './components/Blog'
import TechFeatures from './components/TechFeatures'
import TechAgriculture from './components/TechAgriculture'

function App() {
  useEffect(() => {
    // 导航栏滚动效果
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // 页面滚动动画
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // 初始触发一次，确保页面加载时的状态正确
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="logo">果链卫士</a>
          <ul className="nav-links">
            <li><a href="#" className="nav-link">首页</a></li>
            <li><a href="#features" className="nav-link">核心功能</a></li>
            <li><a href="#tech" className="nav-link">技术优势</a></li>
            <li><a href="#process" className="nav-link">溯源流程</a></li>
            <li><a href="#team" className="nav-link">团队介绍</a></li>
            <li><a href="#contact" className="nav-link">联系我们</a></li>
          </ul>
          <a href="#" className="cta-button">登录</a>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="hero slide-in-up">
        <div className="container hero-content">
          <h1>果链卫士</h1>
          <p>融合区块链+NFC+AI技术的果园害虫智能识别与全链路可信溯源平台，以"一树一芯、一虫一证、一果一码"为核心，打造从虫情识别、数据上链到防控执行、果品溯源的全闭环生态，为果农、监管、消费者提供一体化解决方案，赋能水果产业高质量发展。</p>
          <div className="hero-buttons">
            <a href="#features" className="cta-button">核心功能</a>
            <a href="#tech" className="cta-button" style={{ backgroundColor: 'var(--dark)' }}>技术优势</a>
          </div>
        </div>
      </section>

      {/* 核心功能区域 */}
      <section className="features slide-in-left" id="features">
        <div className="container">
          <h2>核心功能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>害虫智能识别</h3>
              <p>利用AI技术实时识别果园害虫，提供准确的虫情分析和防治建议。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>区块链溯源</h3>
              <p>基于区块链技术，实现果品全生命周期的可信溯源，确保信息真实不可篡改。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>NFC技术应用</h3>
              <p>通过NFC标签实现一果一码，消费者轻触即可查询果品的全链路信息。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>数据管理分析</h3>
              <p>实时收集和分析果园数据，为果农提供科学的种植决策支持。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>智能防控</h3>
              <p>基于虫情数据，自动生成防控方案，减少农药使用，提高果品品质。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>多端协同</h3>
              <p>支持果农、监管部门、消费者多端使用，实现信息共享和协同管理。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 技术优势区域 */}
      <section className="slide-in-up" id="tech">
        <TechFeatures />
      </section>

      {/* 溯源流程区域 */}
      <section className="process slide-in-right" id="process">
        <div className="container">
          <h2>溯源流程</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>果园数据采集</h3>
              <p>通过智能设备实时采集果园环境数据和虫情信息，上传至平台。</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>数据上链存储</h3>
              <p>将采集的数据通过区块链技术进行加密存储，确保数据不可篡改。</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>AI智能分析</h3>
              <p>利用AI技术分析虫情数据，生成智能防控建议。</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>NFC标签赋码</h3>
              <p>为每个果品粘贴NFC标签，实现一果一码的唯一标识。</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>消费者查询</h3>
              <p>消费者通过手机轻触NFC标签，即可查询果品的全链路信息。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队区域 */}
      <section className="team slide-in-left" id="team">
        <div className="container">
          <h2>团队介绍</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-info">
                <h3>侯安慧</h3>
                <p>项目负责人</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-info">
                <h3>陆家益</h3>
                <p>技术负责人</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-info">
                <h3>周玉娴</h3>
                <p>市场运营负责人</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-info">
                <h3>张艳</h3>
                <p>产品负责人</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-info">
                <h3>范祖海</h3>
                <p>商务负责人</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 科技农业 */}
      <section className="slide-in-up">
        <TechAgriculture />
      </section>

      {/* 客户评价 */}
      <section className="testimonials slide-in-right" id="testimonials">
        <div className="container">
          <h2>用户反馈</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"果链卫士的害虫智能识别功能非常准确，帮助我们及时发现并防治虫害，减少了农药使用，提高了果品品质。区块链溯源功能也让我们的产品更受消费者信任。"</p>
              <div className="testimonial-author">
                <div className="author-avatar">李</div>
                <div className="author-info">
                  <h4>李果农</h4>
                  <p>山东苹果种植户</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"作为监管部门，我们通过果链卫士平台可以实时监控果园的种植情况和虫情数据，提高了监管效率，确保了果品质量安全。"</p>
              <div className="testimonial-author">
                <div className="author-avatar">王</div>
                <div className="author-info">
                  <h4>王监管</h4>
                  <p>农业农村局工作人员</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"现在买水果再也不用担心安全问题了，通过NFC标签轻轻一碰，就能看到果品的整个生长过程，非常安心。果链卫士让我们消费者吃得更放心。"</p>
              <div className="testimonial-author">
                <div className="author-avatar">张</div>
                <div className="author-info">
                  <h4>张消费者</h4>
                  <p>普通消费者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 博客 */}
      <section className="slide-in-down">
        <Blog />
      </section>

      {/* 页脚 */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>果链卫士</h3>
                <p>融合区块链+NFC+AI技术的果园害虫智能识别与全链路可信溯源平台，为果农、监管、消费者提供一体化解决方案。</p>
            </div>
            <div className="footer-section">
              <h3>快速链接</h3>
              <a href="#">首页</a>
              <a href="#features">功能</a>
              <a href="#team">团队</a>
              <a href="#testimonials">客户评价</a>
              <a href="#contact">联系我们</a>
            </div>
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>电话：400-123-4567</p>
              <p>邮箱：info@glws.com</p>
              <p>地址：北京市朝阳区某某大厦</p>
            </div>
            <div className="footer-section">
              <h3>关注我们</h3>
              <a href="#">微信</a>
              <a href="#">微博</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 果链卫士. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App