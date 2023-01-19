import { renderReportFooterText } from '@/utils/renderReportFooterText';

describe('setup translation', () => {
  it('should should return TOTAL: 15 USD', () => {
    expect(renderReportFooterText({ totalAmount: 15, reportType: 'allP-allG' })).toBe(
      'TOTAL: 15 USD',
    );
  });

  it('should should return GATEWAY TOTAL | 15 USD', () => {
    expect(renderReportFooterText({ totalAmount: 15, reportType: 'allP-oneG' })).toBe(
      'GATEWAY TOTAL | 15 USD',
    );
  });

  it('should should return TOTAL | 15 USD', () => {
    expect(renderReportFooterText({ totalAmount: 15, reportType: 'oneP-oneG' })).toBe(
      'TOTAL | 15 USD',
    );
  });

  it('should should return PROJECT TOTAL | 15 USD', async () => {
    expect(renderReportFooterText({ totalAmount: 15, reportType: 'oneP-allG' })).toBe(
      'PROJECT TOTAL | 15 USD',
    );
  });
});
