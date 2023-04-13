export const gapi = {
  // Mock the init function to resolve with a mock user object
  auth2: {
    init: jest.fn().mockResolvedValue({
      currentUser: {
        get: jest.fn().mockReturnValue({
          getId: jest.fn().mockReturnValue('110165951570879197818'),
          getName: jest.fn().mockReturnValue('Xiang rui Kong'),
          getEmail: jest.fn().mockReturnValue('xkong@xkong.asia'),
        }),
      },
    }),
  },
};
