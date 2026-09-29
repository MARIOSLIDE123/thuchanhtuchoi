/**
 * VoiceService - Hệ thống Text-to-Speech (TTS) tiếng Việt Web Speech API chuẩn trình duyệt
 * CHỈ đọc lời thoại của nhân vật.
 * Tuyệt đối không đọc phương án A/B/C, không đọc feedback, không đọc tiêu đề hay điểm số.
 */

export type CharacterVoice = 'nam' | 'ban_lon' | 'nguoi_la' | 'hoc_sinh' | 'ban_ben_canh';

class VoiceService {
  private synth: SpeechSynthesis | null = null;
  private viVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const all = this.synth.getVoices();
    this.viVoices = all.filter(
      (v) => v.lang.toLowerCase().includes('vi') || v.name.toLowerCase().includes('vietnam')
    );
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // ignore
      }
    }
  }

  public speak(
    text: string,
    character: CharacterVoice = 'hoc_sinh',
    enabled: boolean = true,
    onEnd?: () => void
  ) {
    if (!enabled || !this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    const cleanedText = text
      .replace(/[“”"']/g, '')
      .replace(/^[-–—]\s*/, '')
      .trim();

    if (!cleanedText) {
      if (onEnd) onEnd();
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utterance.lang = 'vi-VN';

      if (this.viVoices.length === 0) {
        this.initVoices();
      }
      if (this.viVoices.length > 0) {
        utterance.voice = this.viVoices[0];
      }

      switch (character) {
        case 'nam':
          // Giọng Nam: tự nhiên, hơi tinh nghịch, có tính rủ rê
          utterance.pitch = 1.15;
          utterance.rate = 0.95;
          break;
        case 'ban_lon':
        case 'nguoi_la':
          // Giọng Người lạ / Bạn lớn: người lớn thân thiện nhưng hơi thuyết phục
          utterance.pitch = 0.95;
          utterance.rate = 0.90;
          break;
        case 'hoc_sinh':
        case 'ban_ben_canh':
        default:
          // Giọng Bạn học sinh / Bạn bên cạnh: học sinh tò mò, hào hứng hoặc lo ngại, rõ ràng
          utterance.pitch = 1.12;
          utterance.rate = 0.92;
          break;
      }

      if (onEnd) {
        utterance.onend = () => onEnd();
        utterance.onerror = () => onEnd();
      }

      this.synth.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }
}

export const voiceService = new VoiceService();
