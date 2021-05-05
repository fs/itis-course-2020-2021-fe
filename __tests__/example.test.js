const divider = (a, b) => a / b;

describe('Example tests', () => {
  test('divider', () => {
    // Arrange
    const mockA = 10;
    const mockB = 5;
    const expectedResult = 2;
    // Act
    const result = divider(mockA, mockB);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
