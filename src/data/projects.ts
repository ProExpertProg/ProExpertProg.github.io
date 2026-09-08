export type Project = { title: string; body: string; href?: string };

export const projects: Project[] = [
  {
    title: 'vLLM compilation and fusion passes',
    body: 'torch.compile integration, custom fusion passes, and the piecewise CUDA graph path. 2024–present.',
    href: 'https://github.com/vllm-project/vllm',
  },
  {
    title: 'bfloat16 support in a CPU inference engine',
    body: "End-to-end bf16 in Neural Magic's engine, AVX-512 kernels emitted with Xbyak. Halved data movement.",
  },
  {
    title: 'Rocket avionics',
    body: 'Real-time position estimation, telemetry, and recovery for the MIT Rocket Team. Led the subteam of 15.',
  },
];
