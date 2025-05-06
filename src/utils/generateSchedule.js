// src/utils/generateSchedule.js

export const generateSchedule = (P, R, N, EMI) => {
    const schedule = [];
    let balance = P;
    R = R / 12 / 100;
  
    for (let month = 1; month <= N; month++) {
      const interest = balance * R;
      const principal = EMI - interest;
      balance -= principal;
  
      schedule.push({
        month,
        interest: interest.toFixed(2),
        principal: principal.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : 0,
      });
    }
  
    return schedule;
  };
  