/**
 * HỆ THỐNG ÂM THANH TOÀN DIỆN WEB AUDIO API
 * 1. Âm thanh tương tác: click, buzzer, warningPulse, chime, sparkle, scoreIncrease, scoreDecrease, transition, choiceReady, victoryFanfare.
 * 2. AmbienceEngine: Tạo âm thanh môi trường không gian trường học tự nhiên (hành lang, cổng trường, lớp học, thanh thản).
 * 3. Hỗ trợ tự động hạ âm lượng môi trường 50% (Audio Ducking) khi nhân vật nói.
 */

let audioCtx: AudioContext | null = null;

export function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const playSound = {
  // 1. Click mềm khi chọn đáp án / nhấn nút
  click: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // ignore
    }
  },

  // 2. Âm thanh "choice ready" báo hiệu nhân vật đã nói xong, sẵn sàng lựa chọn
  choiceReady: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [880, 1174.66].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);

        gain.gain.setValueAtTime(0.08, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.28);
      });
    } catch {
      // ignore
    }
  },

  // 3. Buzzer khi chọn sai (rõ ràng, không quá lớn)
  buzzer: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      [0, 0.15].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(145, now + delay);
        osc.frequency.linearRampToValueAtTime(125, now + delay + 0.12);

        gain.gain.setValueAtTime(0.16, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.13);
      });
    } catch {
      // ignore
    }
  },

  // 4. Warning Pulse khi vào tình huống căng thẳng hoặc cảnh báo
  warningPulse: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.35);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } catch {
      // ignore
    }
  },

  // 5. Chuông chúc mừng (Chime) khi đúng
  chime: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      // Arpeggio F-Major / C-Major ấm áp
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.18, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.42);
      });
    } catch {
      // ignore
    }
  },

  // 6. Hiệu ứng lấp lánh (Sparkle)
  sparkle: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const freqs = [1318.51, 1567.98, 1760.0, 2093.0];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.09, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.22);
      });
    } catch {
      // ignore
    }
  },

  // 7. Hiệu ứng âm thanh tăng điểm (Rising chime)
  scoreIncrease: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const freqs = [587.33, 739.99, 880.0, 1174.66];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.14, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.32);
      });
    } catch {
      // ignore
    }
  },

  // 8. Hiệu ứng âm thanh giảm điểm (Soft dropping warning tone)
  scoreDecrease: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const freqs = [440.0, 370.0, 311.13];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);

        gain.gain.setValueAtTime(0.1, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.28);
      });
    } catch {
      // ignore
    }
  },

  // 9. Âm thanh chuyển cảnh thống nhất (0.5 – 1 giây)
  transition: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.25);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch {
      // ignore
    }
  },

  // 10. Âm thanh hoàn thành nhiệm vụ / Nhạc kết thúc tích cực (2-3 giây)
  victoryFanfare: (enabled: boolean) => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      // Hợp âm chiến thắng: C5 -> E5 -> G5 -> C6 -> E6
      const chords = [
        { time: 0.0, freq: 523.25, dur: 0.3 },
        { time: 0.15, freq: 659.25, dur: 0.3 },
        { time: 0.3, freq: 783.99, dur: 0.3 },
        { time: 0.5, freq: 1046.5, dur: 0.8 },
        { time: 0.5, freq: 1318.51, dur: 0.8 },
        { time: 1.1, freq: 880.0, dur: 0.4 },
        { time: 1.3, freq: 987.77, dur: 0.4 },
        { time: 1.5, freq: 1046.5, dur: 1.4 },
      ];

      chords.forEach(({ time, freq, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0.18, now + time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + time);
        osc.stop(now + time + dur + 0.05);
      });
    } catch {
      // ignore
    }
  },
};

export type AmbienceType =
  | 'corridor'       // Hành lang vắng, không gian trường học nhẹ (Scene 1, 4)
  | 'corridor_tense' // Hành lang hơi trầm cảnh báo / căng thẳng (Scene 2, 3)
  | 'school_gate'    // Cổng trường sau giờ học (Scene 6, 7, 8, 9)
  | 'classroom'      // Lớp học yên tĩnh sau giờ ra chơi (Scene 10, 11, 12, 13)
  | 'peaceful'       // Không gian yên bình, an toàn học đường (Scene 5, completed)
  | 'none';

class AmbienceEngine {
  private masterGain: GainNode | null = null;
  private duckGain: GainNode | null = null;
  private activeNodes: (AudioNode & { stop?: () => void })[] = [];
  private currentType: AmbienceType = 'none';
  private isEnabled = true;
  private baseVolume = 0.12;

  private initGraph(): AudioContext | null {
    const ctx = getAudioContext();
    if (!ctx) return null;

    if (!this.masterGain) {
      this.masterGain = ctx.createGain();
      this.duckGain = ctx.createGain();

      this.masterGain.gain.setValueAtTime(this.isEnabled ? this.baseVolume : 0, ctx.currentTime);
      this.duckGain.gain.setValueAtTime(1.0, ctx.currentTime);

      this.duckGain.connect(this.masterGain);
      this.masterGain.connect(ctx.destination);
    }
    return ctx;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    const ctx = getAudioContext();
    if (this.masterGain && ctx) {
      this.masterGain.gain.setTargetAtTime(enabled ? this.baseVolume : 0, ctx.currentTime, 0.05);
    }
    if (!enabled) {
      this.stop();
    } else if (this.currentType !== 'none') {
      this.setAmbience(this.currentType);
    }
  }

  /**
   * Hạ âm lượng môi trường 50% khi nhân vật nói (Audio Ducking)
   */
  public setDucking(isDucking: boolean) {
    const ctx = getAudioContext();
    if (this.duckGain && ctx) {
      const targetGain = isDucking ? 0.45 : 1.0;
      this.duckGain.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.15);
    }
  }

  public stop() {
    this.activeNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') {
          node.stop();
        }
        node.disconnect();
      } catch {
        // ignore
      }
    });
    this.activeNodes = [];
  }

  public setAmbience(type: AmbienceType) {
    this.currentType = type;
    this.stop();
    if (!this.isEnabled || type === 'none') return;

    const ctx = this.initGraph();
    if (!ctx || !this.duckGain) return;

    const now = ctx.currentTime;

    switch (type) {
      case 'corridor': {
        // Hành lang: tiếng gió nhẹ + âm vang hành lang rất nhẹ
        const noiseBuffer = this.createNoiseBuffer(ctx, 3);
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.06, now);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.duckGain);
        noise.start();
        this.activeNodes.push(noise, filter, gain);
        break;
      }

      case 'corridor_tense': {
        // Hành lang căng thẳng: tone trầm nhẹ cảnh báo
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(95, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.05, now);

        osc.connect(gain);
        gain.connect(this.duckGain);
        osc.start();
        this.activeNodes.push(osc, gain);
        break;
      }

      case 'school_gate': {
        // Cổng trường: không gian ngoài trời thoáng đãng, gió nhẹ
        const noiseBuffer = this.createNoiseBuffer(ctx, 3);
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(450, now);
        filter.Q.setValueAtTime(1.2, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.05, now);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.duckGain);
        noise.start();
        this.activeNodes.push(noise, filter, gain);
        break;
      }

      case 'classroom': {
        // Lớp học: tiếng quạt/điều hòa rất êm nhẹ
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(65, now);

        const noiseBuffer = this.createNoiseBuffer(ctx, 3);
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.04, now);

        osc.connect(gain);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.duckGain);

        osc.start();
        noise.start();
        this.activeNodes.push(osc, noise, filter, gain);
        break;
      }

      case 'peaceful': {
        // Không gian yên bình, an toàn học đường: hợp âm dịu nhẹ
        [261.63, 329.63, 392.0].forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.025, now);

          osc.connect(gain);
          gain.connect(this.duckGain!);
          osc.start();
          this.activeNodes.push(osc, gain);
        });
        break;
      }
    }
  }

  private createNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
    const bufferSize = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
    }
    return buffer;
  }
}

export const ambienceEngine = new AmbienceEngine();
