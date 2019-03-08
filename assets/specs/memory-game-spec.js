describe('Checking Parameters', function () {
  it('Shuffle Cards to be a Function', function () {
    expect(typeof shuffleGameboard).toBe('function');
    });
  it('Rotate Card to be a Function', function () {
    expect(typeof rotateCard).toBe('function');
    }); 
  it('Playing Game to be a Function', function () {
    expect(typeof playingGame).toBe('function');
    });    
  it('Unmatched Cards to be a Function', function () {
    expect(typeof unmatchedCards).toBe('function');
    });
  it('Matching Cards to be a Function', function () {
    expect(typeof matchingCards).toBe('function');
    }); 
  it('shuffleNumber should be a number', function () {
    expect(typeof shuffleNumber).toBe('number');
    }); 
});






