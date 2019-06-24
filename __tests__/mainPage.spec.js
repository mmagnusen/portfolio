describe('a test', () => {
    it('returns area', () => {
        const calculateArea = (length, width) => {
            return length * width;
        }

        const area = calculateArea(12, 12)
        expect(area).toEqual(144);
    })
})