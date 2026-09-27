export type SceneId = 
  | 'start' 
  // Mission 1: Áp lực từ bạn bè – Lời rủ rê dùng Pod
  | 'scene_1' 
  | 'scene_2' 
  | 'scene_3' 
  | 'scene_4' 
  | 'scene_5' 
  // Mission 2: Ly nước lạ ở cổng trường
  | 'scene_6' 
  | 'scene_7' 
  | 'scene_8' 
  | 'scene_9' 
  // Mission 3: Gói đồ lạ trong lớp
  | 'scene_10' 
  | 'scene_11' 
  | 'scene_12' 
  | 'scene_13' 
  | 'completed';

export type MissionNumber = 1 | 2 | 3;

export type NamMood = 
  | 'hao_hung'    // Excited (Scene 1)
  | 'dac_y'       // Triumphant / smug (Scene 2)
  | 'khich_bac'   // Mocking / teasing (Scene 3)
  | 'lung_tung';  // Surprised / flustered (Scene 4)

export interface ChoiceOption {
  id: string;
  label: string;
  text: string;
  isCorrect?: boolean;
  feedback?: string;
}
