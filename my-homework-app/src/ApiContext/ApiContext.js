import React from 'react';

export default React.createContext({
  //context methods

  schoolClasses: [],
  homework: [],
  addSchoolClass: () => { },
  deleteClass: () => { },
  getClass: () => { },
  updateClass: () => { },
  getClassId: () => { },
  setClassId: () => { },
})