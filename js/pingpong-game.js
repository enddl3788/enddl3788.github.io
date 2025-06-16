// pingpong-game.js: 미니멀 핑퐁 게임 (이스터에그)
let pongAnim, pongRunning = false, pongScore = 0;
function pongGameInit() {
  const canvas = document.getElementById('pong-canvas');
  canvas.height = 180; // 높이 확장
  const ctx = canvas.getContext('2d');
  let paddle = { x: 180, w: 60, h: 14 };
  let ball = { x: 200, y: 100, vx: 3, vy: 3, r: 10 };
  pongScore = 0;
  pongRunning = false;
  let countdown = 3;
  function draw() {
    ctx.clearRect(0,0,400,180);
    // 배경
    ctx.fillStyle = '#d5f5da'; ctx.fillRect(0,0,400,180);
    // 패들
    ctx.fillStyle = '#03C75A'; ctx.fillRect(paddle.x, 160, paddle.w, paddle.h);
    // 공
    ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2); ctx.fillStyle = '#222'; ctx.fill();
    // 점수
    ctx.fillStyle = '#888'; ctx.font = '16px sans-serif'; ctx.fillText('SCORE: '+pongScore, 300, 30);
  }
  function update() {
    ball.x += ball.vx; ball.y += ball.vy;
    // 벽 반사
    if (ball.x-ball.r < 0 || ball.x+ball.r > 400) ball.vx *= -1;
    if (ball.y-ball.r < 0) ball.vy *= -1;
    // 패들 충돌
    if (ball.y+ball.r >= 160 && ball.x > paddle.x && ball.x < paddle.x+paddle.w) {
      ball.vy *= -1; pongScore++;
      ball.y = 160-ball.r;
    }
    // 바닥에 닿으면 게임오버
    if (ball.y+ball.r > 180) { pongRunning = false; alert('Game Over! 점수: '+pongScore); pongGameStop(); return; }
  }
  function loop() { if (!pongRunning) return; update(); draw(); pongAnim = requestAnimationFrame(loop); }
  function startGame() { pongRunning = true; loop(); }
  // 카운트다운
  function doCountdown() {
    ctx.clearRect(0,0,400,180);
    ctx.fillStyle = '#03C75A';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(countdown > 0 ? countdown : 'START!', 200, 100);
    if (countdown > 0) {
      countdown--;
      setTimeout(doCountdown, 700);
    } else {
      setTimeout(() => { draw(); startGame(); }, 700);
    }
  }
  draw();
  doCountdown();
  // 패들 이동
  canvas.onmousemove = e => {
    const rect = canvas.getBoundingClientRect();
    let mx = e.clientX - rect.left;
    paddle.x = Math.max(0, Math.min(mx - paddle.w/2, 400-paddle.w));
  };
  canvas.ontouchmove = e => {
    const rect = canvas.getBoundingClientRect();
    let tx = e.touches[0].clientX - rect.left;
    paddle.x = Math.max(0, Math.min(tx - paddle.w/2, 400-paddle.w));
  };
}
function pongGameStop() { pongRunning = false; cancelAnimationFrame(pongAnim); }
