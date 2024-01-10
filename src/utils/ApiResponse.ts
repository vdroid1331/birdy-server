class ApiResponse<T> {
  public statusCode: number;
  public data: T;
  public message: string;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode < 400 ? statusCode : 0;
  }
}

export default ApiResponse;
