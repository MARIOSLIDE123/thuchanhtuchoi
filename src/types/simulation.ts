export type SceneId = 
  | 'start' 
  // Mission 1: Áp lực từ bạn bè
  | 'scene_1' 
  | 'scene_2' 
  | 'scene_3' 
  | 'scene_4' 
  | 'scene_5'
  | 'scene_1_1_new'
  | 'scene_1_2_new'
  // Mission 2: Cảnh giác đồ uống, sản phẩm lạ
  | 'scene_6' 
  | 'scene_7' 
  | 'scene_8' 
  | 'scene_9'
  | 'scene_2_1_new'
  | 'scene_2_2_new'
  // Mission 3: Không làm ngơ và biết tìm sự giúp đỡ
  | 'scene_10' 
  | 'scene_11' 
  | 'scene_12' 
  | 'scene_13'
  | 'scene_3_1_new'
  | 'scene_3_2_new'
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
