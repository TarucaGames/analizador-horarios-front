import { TestBed } from '@angular/core/testing';

import { FileAnalyzerService } from './file-analyzer.service';

describe('FileAnalyzerService', () => {
  let service: FileAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
