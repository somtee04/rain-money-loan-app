import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState([500000]); // Default ₦500,000
  const [loanTerm, setLoanTerm] = useState([6]); // Default 6 months
  
  // Simple calculation for demonstration (you can implement more complex logic)
  const monthlyRate = 0.05; // 5% monthly rate for demonstration
  const monthlyPayment = (loanAmount[0] * (1 + monthlyRate * loanTerm[0])) / loanTerm[0];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Calculate Your <span className="text-primary">Repayments</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Use our calculator to estimate your monthly payments
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-strong border-0">
            <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl">Loan Calculator</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Loan Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold">Loan Amount</Label>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(loanAmount[0])}
                    </span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={5000000}
                    min={25000}
                    step={25000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₦25,000</span>
                    <span>₦5,000,000</span>
                  </div>
                </div>

                {/* Loan Term Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold">Loan Term</Label>
                    <span className="text-xl font-bold text-secondary">
                      {loanTerm[0]} Month{loanTerm[0] > 1 ? 's' : ''}
                    </span>
                  </div>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    max={12}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 Month</span>
                    <span>12 Months</span>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-gradient-primary/10 rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Estimated Monthly Repayment:
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Estimates provided for illustration purposes only. 
                    Actual rates may vary based on your credit profile.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;