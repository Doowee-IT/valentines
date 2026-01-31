import { Injectable } from '@nestjs/common';
import { ValentineResponse } from './app.controller';

@Injectable()
export class AppService {
  private responses: ValentineResponse[] = [];

  saveResponse(response: ValentineResponse) {
    const responseWithTimestamp = {
      ...response,
      timestamp: new Date().toISOString(),
    };
    
    this.responses.push(responseWithTimestamp);
    
    console.log('\n💝 New Valentine Response Received!');
    console.log(`   Answer: ${response.answer}`);
    console.log(`   Time: ${responseWithTimestamp.timestamp}`);
    if (response.message) {
      console.log(`   Message: ${response.message}`);
    }
    console.log('');
    
    return {
      success: true,
      message: response.answer === 'yes' 
        ? '🎉 Yay! Response saved!' 
        : '😊 Response saved!',
      data: responseWithTimestamp,
    };
  }

  getResponses() {
    return {
      total: this.responses.length,
      responses: this.responses,
    };
  }

  getStats() {
    const yesCount = this.responses.filter(r => r.answer === 'yes').length;
    const maybeCount = this.responses.filter(r => r.answer === 'maybe').length;
    
    return {
      total: this.responses.length,
      yes: yesCount,
      maybe: maybeCount,
      yesPercentage: this.responses.length > 0 
        ? ((yesCount / this.responses.length) * 100).toFixed(1) + '%' 
        : '0%',
    };
  }
}
