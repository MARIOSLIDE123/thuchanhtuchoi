/**
 * Dữ liệu kịch bản chuẩn cho toàn bộ 3 phần.
 * Giữ nguyên 100% nội dung gốc của Scene 1 -> Scene 13.
 * Bổ sung đúng 6 tình huống mới (mỗi phần 2 tình huống) theo yêu cầu.
 */

export const APP_INFO = {
  title: 'THỰC HÀNH – MÔ PHỎNG HỘI THOẠI',
  subtitle: 'Thử thách bản lĩnh – Biết nói “KHÔNG” trước áp lực từ bạn bè',
  startIntro: 'Hãy lựa chọn cách xử lý phù hợp trong từng tình huống.',
  startButton: 'BẮT ĐẦU',
};

export const MISSIONS_INFO = [
  {
    id: 1,
    title: 'ÁP LỰC BẠN BÈ',
    fullTitle: 'Nhiệm Vụ 1: Áp Lực Từ Bạn Bè – Lời Rủ Rê',
    desc: 'Biết nói "KHÔNG" dứt khoát trước cám dỗ và áp lực bạn bè',
  },
  {
    id: 2,
    title: 'LỜI MỜI BẤT NGỜ',
    fullTitle: 'Nhiệm Vụ 2: Lời Mời Đồ Uống – Biết Từ Chối & Di Chuyển',
    desc: 'Không nhận đồ ăn, thức uống từ người lạ, giữ khoảng cách an toàn',
  },
  {
    id: 3,
    title: 'ĐỒ VẬT ĐÁNG NGỜ',
    fullTitle: 'Nhiệm Vụ 3: Đồ Vật Đáng Ngờ – Không Chạm, Báo Người Lớn',
    desc: 'Không tự ý mở, nếm, cầm đồ vật lạ; báo ngay cho cô giáo',
  },
];

// =========================================================================
// ======================== PHẦN 1: ÁP LỰC TỪ BẠN BÈ =======================
// =========================================================================

export const SCENE_1_DATA = {
  title: 'SCENE 1 – LỜI RỦ RÊ ĐẦU TIÊN',
  context: 'Một góc hành lang vắng hoặc quán nước gần trường.',
  characterName: 'Nam',
  characterState: 'Nam – vẻ mặt hào hứng',
  dialog: '“Ê, tớ mới mượn được cây Pod này vị đào lạnh ngon lắm, xả stress việc học thi cực đỉnh. Thử một hơi đi, không ai biết đâu mà lo!”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A – TÒ MÒ',
      text: '“Thế à? Chỉ hút một hơi thôi chắc không nghiện đâu nhỉ. Đưa tớ xem thử mùi vị thế nào.”',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B – TỪ CHỐI YẾU ỚT',
      text: '“Thôi tớ không hút đâu, nhỡ thầy cô phát hiện thì chết.”',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C – KIÊN QUYẾT TỪ CHỐI',
      text: '“Tớ không hút! Cậu cũng vứt đi, tớ đọc báo thấy người ta lén pha ma túy tổng hợp vào tinh dầu Pod đấy, tàn phá não bộ nguy hiểm lắm!”',
    },
  ],
};

export const SCENE_2_DATA = {
  title: 'SCENE 2 – HẬU QUẢ CỦA LỰA CHỌN A',
  characterName: 'Nam',
  characterState: 'Vẻ mặt đắc ý',
  dialog: '“Đúng rồi, thử cho biết với người ta, dân chơi sợ gì mưa rơi. Cầm lấy rít một hơi thật sâu vào!”',
  feedback: {
    title: 'Sai lầm nghiêm trọng!',
    content: 'Sai lầm nghiêm trọng! Rất nhiều trường hợp tinh dầu thuốc lá điện tử bị pha trộn ma túy tổng hợp (như ADB-Butinaca). Chỉ một lần "thử cho biết", hệ thần kinh của em có thể bị tổn thương nặng nề, gây ảo giác và lệ thuộc hoàn toàn. Nhớ quy tắc: Tuyệt đối không thử dù chỉ một lần!',
  },
  retryButton: 'THỬ LẠI',
};

export const SCENE_3_DATA = {
  title: 'SCENE 3 – ÁP LỰC TỪ BẠN BÈ',
  characterName: 'Nam',
  characterState: 'Thái độ khích bác, nhếch mép',
  dialog: '“Gớm, cậu nhát gan thế! Cô Thu đang bận họp, không ai đi tuần đâu. Hút một hơi cho sành điệu, hay cậu sợ?”',
  choices: [
    {
      id: 'B1',
      label: 'B1 – BỊ KHUẤT PHỤC',
      text: '“Ờ... thế đưa tớ thử một tí thôi nhé, cậu che cho tớ đấy.”',
    },
    {
      id: 'B2',
      label: 'B2 – DỨT KHOÁT RỜI ĐI',
      text: '“Đã bảo là không! Cậu giữ lấy mà hút, tớ phải vào lớp đây.”',
    },
  ],
  feedbackB1: {
    content: 'Áp lực bạn bè rất nguy hiểm, em phải học cách nói "KHÔNG" dứt khoát!',
  },
  retryButton: 'THỬ LẠI',
};

export const SCENE_4_DATA = {
  title: 'SCENE 4 – KIÊN QUYẾT TỪ CHỐI',
  characterName: 'Nam',
  characterState: 'Vẻ mặt bất ngờ, lúng túng',
  dialog: '“Làm gì mà căng thế... Tớ... tớ cũng chỉ mượn được thôi chứ có biết bên trong có ma túy đâu.”',
  feedback: {
    badge: '+50 BẢN LĨNH',
    title: 'Xuất sắc!',
    content: 'Xuất sắc! Em đã áp dụng đúng quy tắc "Ngón Trỏ" - Kiên quyết từ chối cám dỗ và còn cảnh báo ngược lại cho bạn mình. Bản lĩnh của em chính là lá chắn thép bảo vệ bản thân!',
  },
  nextButton: 'TIẾP TỤC',
};

export const SCENE_5_DATA = {
  title: 'SCENE 5 – HÀNH ĐỘNG TIẾP NỐI',
  question: 'Sau khi đã từ chối và nhanh chóng rời khỏi đó, để đảm bảo an toàn cho môi trường học đường, việc tiếp theo em CẦN LÀM nhất là gì?',
  choices: [
    {
      id: '1',
      label: 'LỰA CHỌN 1',
      text: '“Trở về lớp học và giữ im lặng, coi như chưa có chuyện gì xảy ra vì sợ bị bạn bè thù ghét, trả thù.”',
      feedback: 'Chưa đúng! Nếu em im lặng, nhóm bạn đó sẽ tiếp tục sử dụng và có thể lôi kéo thêm nhiều học sinh khác. Sự im lặng của em sẽ vô tình tiếp tay cho cái xấu lây lan.',
      isCorrect: false,
    },
    {
      id: '2',
      label: 'LỰA CHỌN 2',
      text: '“Lên mạng xã hội đăng bài ẩn ý chửi bới nhóm bạn hút Pod để dằn mặt.”',
      feedback: 'Không nên! Cách này không giải quyết được vấn đề tận gốc mà còn dễ gây ra mâu thuẫn, bạo lực học đường không đáng có.',
      isCorrect: false,
    },
    {
      id: '3',
      label: 'LỰA CHỌN 3',
      text: '“Tìm gặp ngay cô giáo chủ nhiệm, bảo vệ nhà trường hoặc bố mẹ ở nhà để bí mật kể lại toàn bộ sự việc.”',
      feedback: 'Hoàn toàn chính xác! Em đã áp dụng đúng quy tắc "Ngón Giữa". Việc chia sẻ thông tin cho người lớn đáng tin cậy không phải là "mách lẻo", mà là hành động dũng cảm để bảo vệ bản thân và cứu bạn bè thoát khỏi cạm bẫy ma túy.',
      isCorrect: true,
      successTitle: 'CHÍNH XÁC!',
    },
  ],
  nextMissionButton: 'SANG TÌNH HUỐNG TIẾP THEO (TÌNH HUỐNG 1.1)',
};

// --- BỔ SUNG PHẦN 1: TÌNH HUỐNG 1.1 MỚI ---
export const SCENE_1_1_NEW_DATA = {
  title: 'TÌNH HUỐNG 1.1 – ĐỪNG LÀM MẤT TÌNH BẠN',
  context: 'Sau giờ học, Nam và một người bạn khác đang đứng ở sân sau trường.',
  characterName: 'Nam',
  characterState: 'Nam – giọng rủ rê, phân vân',
  dialog: '“Ê, hôm nay tụi tớ thử cái này nhé! Cậu không thử thì tụi tớ chơi với ai?”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Ừ... thôi được, tớ thử một lần để khỏi bị các cậu chê.”',
      isCorrect: false,
      feedback: 'Chưa an toàn! Cả nể làm theo điều có hại vì sợ bị chê sẽ khiến em rơi vào nguy hiểm. Tình bạn thực sự không ép buộc nhau làm điều sai trái.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Tớ không thử đâu. Bạn bè thật sự thì phải tôn trọng quyết định của nhau.”',
      isCorrect: true,
      feedback: 'Rất tốt! Biết nói ‘không’ không có nghĩa là mất đi tình bạn. Một người bạn tốt sẽ tôn trọng lựa chọn an toàn của em.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: '“Cậu thích làm gì thì làm, nhưng đừng rủ tớ nữa.”',
      isCorrect: false,
      feedback: 'Chưa phù hợp! Thái độ gay gắt dễ gây xung đột, và quan trọng là chưa giải thích cho bạn hiểu rằng bạn bè cần tôn trọng sự an toàn của nhau.',
    },
  ],
  nextButton: 'SANG TÌNH HUỐNG 1.2',
  retryButton: 'CHỌN LẠI',
};

// --- BỔ SUNG PHẦN 1: TÌNH HUỐNG 1.2 MỚI ---
export const SCENE_1_2_NEW_DATA = {
  title: 'TÌNH HUỐNG 1.2 – CHỈ CẦN GIẤU NGƯỜI LỚN',
  context: 'Một nhóm bạn rủ học sinh thử một sản phẩm lạ và nói rằng người lớn sẽ không biết.',
  characterName: 'Nam',
  characterState: 'Nam – thuyết phục, hơi thúc giục',
  dialog: '“Yên tâm đi, chỉ cần cậu đừng nói với ai là chẳng có chuyện gì đâu.”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Được, tớ sẽ giữ bí mật.”',
      isCorrect: false,
      feedback: 'Sai lầm nguy hiểm! Giữ bí mật về những hành vi độc hại sẽ khiến em và các bạn rơi vào nguy cơ khôn lường.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Không. Chuyện có thể ảnh hưởng đến an toàn của mình thì tớ sẽ nói với người lớn đáng tin cậy.”',
      isCorrect: true,
      feedback: 'Chính xác! Khi có nguy cơ ảnh hưởng đến sự an toàn, em không nên giữ bí mật chỉ vì bị yêu cầu. Hãy tìm một người lớn đáng tin cậy để được hỗ trợ.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: '“Tớ sẽ kể cho một người bạn khác trước.”',
      isCorrect: false,
      feedback: 'Chưa tối ưu! Bạn bè cùng lứa tuổi thường chưa có đủ kỹ năng xử lý tình huống nguy hiểm. Em cần tìm đến người lớn có trách nhiệm.',
    },
  ],
  nextButton: 'HOÀN THÀNH PHẦN 1 · SANG PHẦN 2',
  retryButton: 'CHỌN LẠI',
};

// =========================================================================
// ==================== PHẦN 2: CẢNH GIÁC ĐỒ UỐNG, SẢN PHẨM LẠ ==============
// =========================================================================

export const SCENE_6_DATA = {
  title: 'SCENE 6 – LỜI MỜI BẤT NGỜ',
  context: 'Cổng trường sau giờ học.',
  characterName: 'Bạn lớn',
  characterState: 'Bạn học sinh lớn hơn, vẻ ngoài thân thiện, cầm một ly nước có màu sắc bắt mắt',
  dialog: '“Em ơi, uống thử đi! Nước này ngon lắm, anh vừa mua ở gần đây. Miễn phí đấy!”',
  choices: [
    {
      id: 'A',
      label: 'A – TÒ MÒ',
      text: '“Ồ, nhìn ngon thật! Cho em thử một chút nhé.”',
    },
    {
      id: 'B',
      label: 'B – TỪ CHỐI NHƯNG CÒN ĐỨNG LẠI',
      text: '“Em không uống đâu, nhưng cho em xem thử cái gì trong ly nhé.”',
    },
    {
      id: 'C',
      label: 'C – TỪ CHỐI VÀ DI CHUYỂN',
      text: '“Em cảm ơn, nhưng em không nhận đồ ăn, thức uống từ người lạ. Em sẽ về với bố mẹ ạ!”',
    },
  ],
};

export const SCENE_7_DATA = {
  title: 'SCENE 7 – HẬU QUẢ LỰA CHỌN A',
  characterName: 'Bạn lớn',
  characterState: 'Nhân vật đưa ly tiến về phía học sinh',
  dialog: '“Có gì đâu mà sợ, thử một chút thôi!”',
  feedback: {
    title: 'Chưa an toàn!',
    content: 'Chưa an toàn! Em không nên nhận hoặc thử đồ ăn, thức uống không rõ nguồn gốc, đặc biệt khi được người lạ đưa. Hãy bình tĩnh từ chối và tìm người lớn đáng tin cậy.',
  },
  retryButton: 'THỬ LẠI',
};

export const SCENE_8_DATA = {
  title: 'SCENE 8 – HẬU QUẢ LỰA CHỌN B',
  characterName: 'Bạn lớn',
  characterState: 'Nhân vật tiếp tục thuyết phục',
  dialog: '“Xem làm gì, uống đi! Có gì đâu mà ngại.”',
  feedback: {
    title: 'Cần lưu ý thêm!',
    content: 'Em đã từ chối uống, đó là điều tốt. Nhưng em vẫn không nên đứng lại để tìm hiểu hay nhận đồ từ người lạ. Khi cảm thấy không an toàn, hãy rời khỏi đó và tìm người lớn đáng tin cậy.',
  },
  retryButton: 'CHỌN LẠI',
};

export const SCENE_9_DATA = {
  title: 'SCENE 9 – KẾT QUẢ TỐT',
  characterName: 'Bạn lớn',
  characterState: 'Nhân vật hơi bất ngờ',
  dialog: '“Ừ... vậy em đi nhé.”',
  feedback: {
    badge: '+25 BẢN LĨNH',
    title: 'Rất tốt!',
    content: 'Rất tốt! Em đã biết từ chối, giữ khoảng cách và lựa chọn cách xử lý an toàn. Đây chính là cách bảo vệ bản thân trước những lời mời đáng ngờ.',
  },
  nextButton: 'SANG TÌNH HUỐNG TIẾP THEO (TÌNH HUỐNG 2.1)',
};

// --- BỔ SUNG PHẦN 2: TÌNH HUỐNG 2.1 MỚI ---
export const SCENE_2_1_NEW_DATA = {
  title: 'TÌNH HUỐNG 2.1 – MÓN QUÀ KHÔNG TÊN',
  context: 'Sau một buổi hoạt động, một người lạ đứng gần cổng trường đưa cho học sinh một hộp quà nhỏ.',
  characterName: 'Người lạ',
  characterState: 'Người lớn thân thiện, nhưng hơi thuyết phục',
  dialog: '“Cô/chú có quà cho các em này. Cầm lấy nhé, bên trong là đồ ăn ngon đấy!”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Cảm ơn ạ!” rồi nhận lấy ngay.',
      isCorrect: false,
      feedback: 'Cực kỳ nguy hiểm! Tuyệt đối không nhận đồ ăn, thức uống không rõ nguồn gốc từ người lạ vì có thể chứa chất cấm hoặc hóa chất độc hại.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Cháu cảm ơn, nhưng cháu không nhận đồ từ người lạ ạ.”',
      isCorrect: true,
      feedback: 'Hoàn toàn chính xác! Khi không biết rõ nguồn gốc của một sản phẩm, em không nên nhận hoặc tự ý mở. Hãy từ chối lịch sự và tìm người lớn đáng tin cậy.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: 'Nhận hộp quà rồi mở ngay để xem bên trong có gì.',
      isCorrect: false,
      feedback: 'Rất nguy hiểm! Tự ý mở đồ vật lạ có thể khiến em tiếp xúc với chất độc hoặc bụi độc phát tán trong không khí.',
    },
  ],
  nextButton: 'SANG TÌNH HUỐNG 2.2',
  retryButton: 'CHỌN LẠI',
};

// --- BỔ SUNG PHẦN 2: TÌNH HUỐNG 2.2 MỚI ---
export const SCENE_2_2_NEW_DATA = {
  title: 'TÌNH HUỐNG 2.2 – BAO BÌ THẬT ĐẸP',
  context: 'Một bạn mang đến một gói đồ uống có bao bì rất bắt mắt, nhiều màu sắc và ký hiệu lạ.',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh – tò mò, hào hứng',
  dialog: '“Nhìn đẹp quá! Chắc là đồ uống mới đấy. Mở ra thử đi!”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Được, mở ra xem thử.”',
      isCorrect: false,
      feedback: 'Chưa đúng! Bao bì bắt mắt là chiêu trò ngụy trang phổ biến của các loại ma túy mới (như Nước vui, Trà sữa...). Tuyệt đối không tự ý mở nếm.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Bao bì đẹp thì chắc an toàn thôi.”',
      isCorrect: false,
      feedback: 'Sai lầm nghiêm trọng! Rất nhiều chất độc hại được đóng gói tinh vi dưới dạng bánh kẹo, nước ngọt sặc sỡ để đánh lừa học sinh.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: '“Đừng thử. Mình không biết rõ nguồn gốc của nó, tốt nhất báo cho thầy cô hoặc người lớn.”',
      isCorrect: true,
      feedback: 'Chính xác! Bao bì bắt mắt không có nghĩa là sản phẩm an toàn. Khi gặp sản phẩm lạ hoặc không rõ nguồn gốc, nguyên tắc an toàn là không thử và báo cho người lớn.',
    },
  ],
  nextButton: 'HOÀN THÀNH PHẦN 2 · SANG PHẦN 3',
  retryButton: 'CHỌN LẠI',
};

// =========================================================================
// ================= PHẦN 3: KHÔNG LÀM NGƠ VÀ BIẾT TÌM SỰ GIÚP ĐỠ ============
// =========================================================================

export const SCENE_10_DATA = {
  title: 'SCENE 10 – PHÁT HIỆN ĐỒ VẬT BẤT THƯỜNG',
  context: 'Trong lớp học sau giờ ra chơi. Một gói nhỏ có bao bì lạ để trên bàn.',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh tiến đến gần gói đồ lạ',
  dialog: '“Ê, cái này ai để quên này! Mở ra xem bên trong là gì đi!”',
  choices: [
    {
      id: 'A',
      label: 'A – TÒ MÒ',
      text: '“Ừ, mở ra xem thử đi!”',
    },
    {
      id: 'B',
      label: 'B – CẦM LÊN XEM',
      text: '“Để tớ cầm lên xem có gì nhé.”',
    },
    {
      id: 'C',
      label: 'C – KHÔNG ĐỤNG VÀO',
      text: '“Không được! Mình không biết đây là gì. Tốt nhất là không chạm vào và báo ngay cho cô giáo.”',
    },
  ],
};

export const SCENE_11_DATA = {
  title: 'SCENE 11 – HẬU QUẢ LỰA CHỌN A',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh dừng lại khi có cảnh báo nguy hiểm',
  dialog: '“Định mở ra xem...”',
  feedback: {
    title: 'Chưa đúng!',
    content: 'Chưa đúng! Với một đồ vật không rõ nguồn gốc, em không được tự ý mở, nếm hoặc thử. Cách an toàn nhất là giữ khoảng cách và báo ngay cho người lớn.',
  },
  retryButton: 'THỬ LẠI',
};

export const SCENE_12_DATA = {
  title: 'SCENE 12 – HẬU QUẢ LỰA CHỌN B',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh định cầm gói lên',
  dialog: '“Đợi đã! Chúng ta không biết bên trong là gì.”',
  feedback: {
    title: 'Chưa an toàn!',
    content: 'Chưa an toàn! Không nên tự ý chạm vào hoặc mang theo đồ vật đáng ngờ. Hãy để nguyên vị trí và báo ngay cho giáo viên hoặc người lớn.',
  },
  retryButton: 'CHỌN LẠI',
};

export const SCENE_13_DATA = {
  title: 'SCENE 13 – XỬ LÝ ĐÚNG',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh lùi lại một bước an toàn và đi báo giáo viên',
  dialog: '“Mình cùng đi báo cô giáo ngay nhé!”',
  feedback: {
    badge: '+25 BẢN LĨNH',
    title: 'Chính xác!',
    content: 'Chính xác! Em đã bình tĩnh, không tự ý chạm vào đồ vật đáng ngờ và biết tìm người lớn đáng tin cậy để hỗ trợ. Đó là một lựa chọn rất an toàn.',
  },
  nextButton: 'SANG TÌNH HUỐNG TIẾP THEO (TÌNH HUỐNG 3.1)',
};

// --- BỔ SUNG PHẦN 3: TÌNH HUỐNG 3.1 MỚI ---
export const SCENE_3_1_NEW_DATA = {
  title: 'TÌNH HUỐNG 3.1 – MÌNH CÓ NÊN NÓI KHÔNG?',
  context: 'Một học sinh nhìn thấy một người bạn có biểu hiện bất thường và được một nhóm bạn kéo vào một góc khuất.',
  characterName: 'Bạn bên cạnh',
  characterState: 'Bạn bên cạnh – lo ngại, nói nhỏ nhưng rõ ràng',
  dialog: '“Kệ đi, chuyện của họ. Đừng liên quan vào, rắc rối lắm.”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Ừ, mình không quan tâm.”',
      isCorrect: false,
      feedback: 'Thờ ơ, làm ngơ trước hiểm nguy của bạn bè là gián tiếp để bạn mình rơi vào nguy kịch.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Mình sẽ đăng lên mạng để mọi người biết.”',
      isCorrect: false,
      feedback: 'Không nên! Đăng lên mạng xã hội vừa vi phạm quyền riêng tư, vừa không kịp thời cứu giúp bạn trong tình huống khẩn cấp.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: '“Mình sẽ báo cho giáo viên hoặc một người lớn đáng tin cậy để họ hỗ trợ.”',
      isCorrect: true,
      feedback: 'Rất tốt! Không làm ngơ trước nguy cơ không có nghĩa là tự mình giải quyết. Cách an toàn là tìm người lớn đáng tin cậy để được hỗ trợ.',
    },
  ],
  nextButton: 'SANG TÌNH HUỐNG 3.2',
  retryButton: 'CHỌN LẠI',
};

// --- BỔ SUNG PHẦN 3: TÌNH HUỐNG 3.2 MỚI ---
export const SCENE_3_2_NEW_DATA = {
  title: 'TÌNH HUỐNG 3.2 – ĐỪNG ĐĂNG LÊN MẠNG',
  context: 'Một bạn học sinh phát hiện chuyện đáng ngờ và rất tức giận.',
  characterName: 'Bạn học sinh',
  characterState: 'Bạn học sinh – bức xúc, nóng vội',
  dialog: '“Tớ chụp lại rồi đăng lên mạng cho mọi người biết, để nhóm đó bị xấu hổ!”',
  choices: [
    {
      id: 'A',
      label: 'LỰA CHỌN A',
      text: '“Đúng rồi, đăng ngay đi!”',
      isCorrect: false,
      feedback: 'Sai lầm! Đăng lên mạng xã hội dễ dẫn đến xung đột, kích động bạo lực mạng và cản trở việc xử lý đúng đắn của nhà trường.',
    },
    {
      id: 'B',
      label: 'LỰA CHỌN B',
      text: '“Không nên đăng công khai. Mình nên báo trực tiếp cho thầy cô, cha mẹ hoặc người lớn đáng tin cậy.”',
      isCorrect: true,
      feedback: 'Chính xác! Khi gặp vấn đề nghiêm trọng, mạng xã hội không phải là nơi để tự xử lý. Hãy chia sẻ thông tin với người có trách nhiệm để được hỗ trợ đúng cách.',
    },
    {
      id: 'C',
      label: 'LỰA CHỌN C',
      text: '“Chụp thêm ảnh rồi gửi vào nhóm lớp cho mọi người cùng bàn luận.”',
      isCorrect: false,
      feedback: 'Không nên! Việc lan truyền thông tin chưa được kiểm chứng trong nhóm lớp gây hoang mang và vi phạm nguyên tắc giải quyết vấn đề.',
    },
  ],
  nextButton: 'HOÀN THÀNH TẤT CẢ 3 PHẦN · XEM KẾT QUẢ',
  retryButton: 'CHỌN LẠI',
};

export const COMPLETION_DATA = {
  title: 'HOÀN THÀNH XUẤT SẮC TOÀN BỘ CÁC TÌNH HUỐNG',
  badge: 'DŨNG SĨ BẢN LĨNH THÁM TỬ',
  playAgainButton: 'CHƠI LẠI TỪ ĐẦU',
};
