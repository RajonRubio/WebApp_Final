describe('Test Game', function() {
    var subject;
    beforeEach(function() {
        subject = new FindDifferent();
    });

    it('Test CheckGrow function.1', function() {
        subject.run = 2;
        assert.equal( subject.CheckGrow(subject.run), 2, 'You did it.');
    });
    
    it('Test CheckGrow function.1', function() {
        subject.run = 3;
        assert.equal( subject.CheckGrow(subject.run), 3, 'You are wrong.');
    });

    it('Test CheckGrow function.1', function() {
        subject.run = 6;
        assert.equal( subject.CheckGrow(subject.run), 4, 'You are wrong.');
    });
    



    
});