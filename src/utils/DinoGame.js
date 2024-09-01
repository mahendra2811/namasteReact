import React  from 'react'
import { useEffect } from 'react';
import '../CSS/DinoGame.css';

const DinoGame = () => {
  useEffect(() => {
    const canvas = document.getElementById('dinoCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 150;

    let dino = { x: 50, y: 110, width: 40, height: 40, dy: 0 };
    let gravity = 0.5;
    let isJumping = false;
    let isGameOver = false;

    const cactus = { x: canvas.width, y: 110, width: 20, height: 40, dx: -6 };

    function jump() {
      if (!isJumping) {
        isJumping = true;
        dino.dy = -10;
      }
    }

    function drawDino() {
      ctx.fillStyle = 'black';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    }

    function drawCactus() {
      ctx.fillStyle = 'green';
      ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
    }

    function detectCollision() {
      return (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y < cactus.y + cactus.height &&
        dino.y + dino.height > cactus.y
      );
    }

    function update() {
      if (isGameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dino.dy += gravity;
      dino.y += dino.dy;

      if (dino.y > 110) {
        dino.y = 110;
        isJumping = false;
      }

      cactus.x += cactus.dx;

      if (cactus.x + cactus.width < 0) {
        cactus.x = canvas.width;
      }

      drawDino();
      drawCactus();

      if (detectCollision()) {
        isGameOver = true;
        ctx.font = '20px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 50, canvas.height / 2);
      } else {
        requestAnimationFrame(update);
      }
    }

    update();

      document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !isGameOver) {
          jump();
        }
      });
  }, []);
};

export default DinoGame;
