import React from 'react';

export default React.createContext({
  //context methods

  schoolClasses: [],
  homeworkList: [],
  addSchoolClass: () => { },
  deleteClass: () => { },
  getClass: () => { },
  updateClass: () => { },
  getClassId: () => { },
  setClassId: () => { },

  addHomework: () => { },
  deleteHomework: () => { },
  getHomework: () => { },
  updateHomework: () => { },
  getHomeworkId: () => { },
  setHomeworkId: () => { },
})