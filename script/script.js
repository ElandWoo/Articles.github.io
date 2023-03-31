// 获取页面总高度
const pageHeight = document.documentElement.scrollHeight;

// 获取百分数元素
const percentElement = document.querySelector('.back-to-top-percent');

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
  // 计算当前滚动距离与页面总高度的比例
  const scrollPercent = Math.floor((window.scrollY / (pageHeight - window.innerHeight)) * 100);
  // 更新百分数显示
  percentElement.textContent = `${scrollPercent}%`;
});

// 添加返回顶部事件监听器
document.querySelector('.back-to-top-btn').addEventListener('click', () => {
  // 使用动画返回页面顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
