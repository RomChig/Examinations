import axios from 'axios'

export const getUkrainianTest = async () => {
  const assistant_url = 'https://assistant.khai.edu';
  const load_exam_url = '/api/assistant/load_exam';
  const type_of_exam = 'ukrainian';
  return await axios.post(assistant_url.concat(load_exam_url), {exam: type_of_exam})
    .then(res => res.data)
    .catch(error => console.log(error));
}
