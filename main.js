
  const { spawnSync } = require('child_process');
  const { existsSync, writeFileSync } = require('fs');

  if (!existsSync('levanter')) {
    spawnSync('git', ['clone', 'https://github.com/lyfe00011/whatsapp-bot-md.git', 'levanter'], {
      stdio: 'inherit',
    });
    const sessionId = '780514oe'; // 
    const configPath = 'levanter/config.env';
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${sessionId}`);
    spawnSync('yarn', [], { cwd: 'levanter', stdio: 'inherit' });
  }

  spawnSync('yarn', ['start'], { cwd: 'levanter', stdio: 'inherit' });
