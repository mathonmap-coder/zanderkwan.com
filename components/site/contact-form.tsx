'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { useState, type SyntheticEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function submitForm(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const getText = (key: string) => {
      const value = form.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const name = getText('name');
    const email = getText('email');
    const projectType = getText('projectType');
    const message = getText('message');

    if (!name || !email || !message) {
      setStatus('Please complete your name, email, and project note.');
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || 'Not specified'}\n\n${message}`,
    );
    setStatus('Your email app is opening with the project details ready to send.');
    window.location.href = `mailto:hello@zanderkwan.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={submitForm}
      action="mailto:hello@zanderkwan.com"
      method="post"
      encType="text/plain"
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="h-12 rounded-none border-foreground/30 px-4"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-12 rounded-none border-foreground/30 px-4"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="projectType">What are we making?</Label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className="min-h-12 rounded-none border border-foreground/30 bg-transparent px-4 text-sm"
        >
          <option value="">Choose a project type</option>
          <option>Product or platform</option>
          <option>Website or launch</option>
          <option>Brand or design system</option>
          <option>Creative technology</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Tell me about the opportunity</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What are you trying to change, and why now?"
          className="min-h-36 resize-y rounded-none border-foreground/30 p-4"
        />
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button
          type="submit"
          size="lg"
          className="min-h-12 rounded-none bg-accent px-5 text-accent-foreground hover:bg-accent/85"
        >
          Send project details
          <ArrowUpRight aria-hidden="true" />
        </Button>
        <p aria-live="polite" className="flex max-w-sm items-center gap-2 text-sm text-background/65">
          {status ? <Check aria-hidden="true" className="size-4 text-accent" /> : null}
          {status}
        </p>
      </div>
    </form>
  );
}
