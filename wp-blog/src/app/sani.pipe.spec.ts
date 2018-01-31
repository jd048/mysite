import { SaniPipe } from './sani.pipe';

describe('SaniPipe', () => {
  it('create an instance', () => {
    const pipe = new SaniPipe();
    expect(pipe).toBeTruthy();
  });
});
