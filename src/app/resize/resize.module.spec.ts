import { ResizeModule } from './resize.module';

describe('ResizeModule', () => {
  let resizeModule: ResizeModule;

  beforeEach(() => {
    resizeModule = new ResizeModule();
  });

  it('should create an instance', () => {
    expect(resizeModule).toBeTruthy();
  });
});
