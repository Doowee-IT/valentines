import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

export interface ValentineResponse {
  answer: 'yes' | 'maybe';
  timestamp: string;
  message?: string;
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  healthCheck() {
    return {
      status: 'ok',
      message: '💕 Valentine API is running!',
      timestamp: new Date().toISOString(),
    };
  }

  @Post('response')
  saveResponse(@Body() response: ValentineResponse) {
    return this.appService.saveResponse(response);
  }

  @Get('responses')
  getResponses() {
    return this.appService.getResponses();
  }

  @Get('stats')
  getStats() {
    return this.appService.getStats();
  }
}
