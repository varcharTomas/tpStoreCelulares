import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: '', 
      errorInfo: ''     
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado:", error);
    console.error("Detalles del error:", errorInfo);
    
    this.setState({
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#f8d7da' }}>
          <h1 style={{ color: '#721c24' }}>¡Ups! Algo salió mal.</h1>
          <p style={{ color: '#721c24' }}>Lo sentimos, algo no está funcionando bien. Por favor intenta nuevamente.</p>
          <details style={{ color: '#721c24' }}>
            <summary>Detalles del error</summary>
            <p>{this.state.errorMessage}</p>
            <p>{this.state.errorInfo}</p>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

