function analyzeNumber(num: number | string): void {
  if (typeof num !== 'number' || num === 0) {
    return;
  }
  if (num < 0) {
    console.log('---');
    return;
  }
  if (num > 0) {
    console.log('+++');
  }
}

analyzeNumber(5);
analyzeNumber(-5);
analyzeNumber(0);
analyzeNumber('0');
