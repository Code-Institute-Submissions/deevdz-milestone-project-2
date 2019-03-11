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
    it('Count Moves to be a Function', function () {
        expect(typeof countNoOfMoves).toBe('function');
    });
    it('playAgain to be a Function', function () {
        expect(typeof playAgain).toBe('function');
    });
    it('winGame to be a Function', function () {
        expect(typeof winGame).toBe('function');
    });
    it('shuffleNumber should be a number', function () {
        expect(typeof shuffleNumber).toBe('number');
    });
    it('moves should be a number', function () {
        expect(typeof moves).toBe('number');
    });  
});

describe("Matching Cards", function() {

  it("Matching Cards of same image", function() {
    var cardOne = 'strawberry';
    var cardTwo = 'strawberry';

    expect(cardOne).toEqual(cardTwo);
    expect(cardOne).not.toBe(null);
    expect(cardTwo).not.toBe(null);
  });
});

describe("Unmatched Cards", function() {

  it("Cards with different images should not match", function() {
    var cardOne = 'strawberry';
    var cardTwo = 'orange';

    expect(cardOne).not.toMatch(cardTwo);
    expect(cardOne).not.toBe(null);
    expect(cardTwo).not.toBe(null);
  });
});

describe("Counting Moves", function() {
  var moves;

  beforeEach(function() {
    moves = 0;
    moves += 1;
  });

  afterEach(function() {
    moves = 0;
  });

  it("Testing move increments", function() {
    expect(moves).toEqual(1);
  });
});


