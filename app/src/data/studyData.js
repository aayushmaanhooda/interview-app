// Study data parsed from the study files
export const studyData = {
  langchain: {
    name: "LangChain",
    description: "Framework for building LLM applications",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is LangChain and what problem does it solve?",
          answer: "LangChain is an open-source framework designed to build applications powered by Large Language Models (LLMs). It solves several key problems: Chain Management (simplifies connecting LLM calls with other operations), Data Integration (provides tools to connect LLMs with external data sources), Memory Management (handles conversation history and context preservation), Tool Integration (enables LLMs to use external tools and APIs), and Standardization (offers consistent interfaces across different LLM providers)."
        },
        {
          id: 2,
          question: "Explain the basic components of LangChain architecture.",
          answer: "The core components include: LLMs (Large Language Model integrations like OpenAI, Anthropic, etc.), Prompts (template management for consistent prompt formatting), Chains (sequences of operations combining LLMs with other tools), Memory (components to store and retrieve conversation context), Agents (autonomous entities that can use tools and make decisions), Tools (external functions that agents can invoke), Document Loaders (import data from various sources), and Vector Stores (store and retrieve document embeddings)."
        },
        {
          id: 3,
          question: "What are Chains in LangChain and give examples of different chain types?",
          answer: "Chains are sequences of operations that combine LLMs with other components. Common types include: LLMChain (basic chain with LLM + prompt template), SequentialChain (multiple chains executed in sequence), TransformChain (applies transformations to input/output), ConversationChain (maintains conversation memory), RetrievalQA Chain (combines document retrieval with question answering), and APIChain (integrates external API calls with LLM processing)."
        },
        {
          id: 4,
          question: "How do you install and set up LangChain for a basic project?",
          answer: "Installation steps: 1) Install LangChain: pip install langchain, 2) Install specific integrations: pip install langchain-openai (for OpenAI), pip install langchain-community (additional components), 3) Basic setup: import os, from langchain_openai import OpenAI, set environment variable os.environ['OPENAI_API_KEY'] = 'your-api-key', then initialize llm = OpenAI(temperature=0.7)."
        },
        {
          id: 5,
          question: "What is a Prompt Template and why is it important?",
          answer: "A Prompt Template is a structured way to format prompts with variables. Benefits include: Consistency (ensures uniform prompt formatting), Reusability (same template can be used with different inputs), Maintenance (easy to update prompts across applications), and Variable Injection (safely insert dynamic content). Example: template = 'Translate {text} from {source_language} to {target_language}' with PromptTemplate having input_variables for text, source_language, and target_language."
        },
        {
          id: 6,
          question: "What are Document Loaders and name some common types?",
          answer: "Document Loaders are components that import data from various sources into LangChain. Common types include: TextLoader (plain text files), CSVLoader (CSV files), PDFLoader (PDF documents), WebBaseLoader (web pages), DirectoryLoader (multiple files from a directory), NotionLoader (Notion pages), GoogleDriveLoader (Google Drive documents), and WikipediaLoader (Wikipedia articles)."
        },
        {
          id: 7,
          question: "Explain what Vector Stores are and their role in LangChain.",
          answer: "Vector Stores are databases that store and retrieve document embeddings for similarity search. Key roles include: Semantic Search (find relevant documents based on meaning, not keywords), RAG Support (enable Retrieval Augmented Generation), Efficient Retrieval (fast similarity-based document lookup), and Scalability (handle large document collections). Common vector stores include FAISS, Chroma, Pinecone, Weaviate, and Qdrant."
        },
        {
          id: 8,
          question: "What is the difference between LangChain and direct LLM API usage?",
          answer: "Direct LLM API involves raw API calls to providers, manual prompt management, no built-in memory or chaining, and limited data integration. LangChain provides abstracted standardized interface, built-in prompt templates and memory, easy chaining of operations, rich ecosystem of integrations, and agent and tool support."
        },
        {
          id: 9,
          question: "How do you handle API keys and configuration in LangChain?",
          answer: "Multiple approaches: 1) Environment variables (recommended): os.environ['OPENAI_API_KEY'] = 'your-key', 2) Direct parameter passing: llm = OpenAI(api_key='your-key'), 3) Using .env files: from dotenv import load_dotenv; load_dotenv(), 4) Configuration files: from langchain.config import Config."
        },
        {
          id: 10,
          question: "What is the purpose of Text Splitters in LangChain?",
          answer: "Text Splitters break large documents into smaller chunks for processing. Reasons include: Token Limits (LLMs have maximum token constraints), Embedding Efficiency (better vector representations), Retrieval Accuracy (more precise document matching), and Memory Management (reduced computational overhead). Common splitters include CharacterTextSplitter, RecursiveCharacterTextSplitter, and TokenTextSplitter."
        }
      ],
      medium: [
        {
          id: 1,
          question: "Explain Retrieval Augmented Generation (RAG) and how to implement it in LangChain.",
          answer: "RAG combines retrieval of relevant documents with LLM generation to provide accurate, context-aware responses. Implementation: Use RetrievalQA from langchain.chains, FAISS from langchain_community.vectorstores, and OpenAI/OpenAIEmbeddings. Setup involves creating embeddings, vectorstore from documents, and LLM, then creating qa_chain = RetrievalQA.from_chain_type with llm, chain_type='stuff', retriever=vectorstore.as_retriever(), and return_source_documents=True. Benefits include reduced hallucinations, up-to-date information, and source attribution."
        },
        {
          id: 2,
          question: "What are LangChain Agents and how do they differ from Chains?",
          answer: "Agents are autonomous entities that can decide which tools to use and in what order based on user input, while Chains follow a predetermined sequence of operations. Key differences: Decision Making (agents make dynamic decisions, chains follow fixed paths), Tool Usage (agents can select from multiple tools, chains use predefined tools), Flexibility (agents adapt to different queries, chains are more rigid), and Complexity (agents are more complex but more powerful). Agent types include Zero-shot ReAct, Conversational, Plan-and-Execute, and OpenAI Functions."
        },
        {
          id: 3,
          question: "Explain Memory in LangChain and different memory types available.",
          answer: "Memory enables LangChain applications to remember previous interactions. Types include: ConversationBufferMemory (stores entire conversation history), ConversationSummaryMemory (summarizes old conversations to save tokens), ConversationBufferWindowMemory (keeps only recent K interactions), ConversationTokenBufferMemory (maintains conversation up to token limit), ConversationSummaryBufferMemory (hybrid approach combining summary and recent messages), and VectorStoreRetrieverMemory (uses vector similarity for memory retrieval)."
        },
        {
          id: 4,
          question: "How do you implement custom tools for LangChain agents?",
          answer: "Create custom tools by inheriting from BaseTool, defining a Pydantic BaseModel for input validation (e.g., CalculatorInput with expression field), then implement CalculatorTool class with name, description, args_schema, _run method for synchronous execution, and _arun method for asynchronous execution. Include proper error handling with try-catch blocks and return meaningful results or error messages."
        },
        {
          id: 5,
          question: "What is LangGraph and how does it relate to LangChain?",
          answer: "LangGraph is a low-level agent orchestration framework that gives developers durable execution and fine-grained control to run complex agentic systems in production. Key features include: State Management (persistent state across agent interactions), Graph-based Workflows (define complex agent workflows as graphs), Durability (handle failures and retries gracefully), Multi-agent Orchestration (coordinate multiple agents), and Production Ready (built for enterprise deployment). LangGraph works alongside LangChain, providing more sophisticated agent orchestration capabilities."
        },
        {
          id: 6,
          question: "How do you handle streaming responses in LangChain?",
          answer: "Handle streaming using StreamingStdOutCallbackHandler from langchain.callbacks, set up streaming callback, create LLM with streaming=True and callbacks=[callback]. For chains, use LLMChain with callbacks. Create custom streaming handlers by inheriting from BaseCallbackHandler and implementing on_llm_new_token method. For async streaming, use async for chunk in llm.astream('Your prompt here') to process tokens as they arrive."
        },
        {
          id: 7,
          question: "Explain the concept of Chain of Thought prompting and its implementation.",
          answer: "Chain of Thought (CoT) prompting encourages step-by-step reasoning. Implementation approaches include manual CoT with templates like 'Question: {question}\\n\\nLet's think step by step:\\n1. First, I need to understand what's being asked\\n2. Then, I'll break down the problem\\n3. Finally, I'll provide the answer\\n\\nAnswer:' and using LangChain's built-in support with PromptTemplate. Benefits include improved reasoning accuracy, better handling of complex problems, and interpretable results."
        },
        {
          id: 8,
          question: "How do you implement error handling and retries in LangChain applications?",
          answer: "Implement error handling using RetryHandler from BaseCallbackHandler with on_llm_error method, use tenacity library for retries with @retry decorator, stop_after_attempt, and wait_exponential for backoff. Implement circuit breaker patterns with CircuitBreakerLLM class that tracks failure_count, failure_threshold, and is_open status to prevent cascading failures."
        },
        {
          id: 9,
          question: "What are Output Parsers and how do you create custom ones?",
          answer: "Output Parsers structure LLM responses into specific formats. Create custom parsers by inheriting from BaseOutputParser, implementing parse method to convert text to desired format (e.g., JSON with error handling), and get_format_instructions method. Use Pydantic for structured output with BaseModel classes defining fields with descriptions, then use PydanticOutputParser for automatic validation and parsing."
        },
        {
          id: 10,
          question: "How do you optimize LangChain applications for production use?",
          answer: "Production optimization strategies: Performance (use async operations, implement caching, optimize prompt lengths, use streaming), Reliability (comprehensive error handling, retry mechanisms with exponential backoff, circuit breaker patterns, monitor API rate limits), Observability (logging and monitoring, track token usage and costs, implement tracing, use callbacks for metrics), Security (secure API key management, input validation and sanitization, rate limiting, audit logging)."
        }
      ],
      hard: [
        {
          id: 1,
          question: "Design a multi-agent system using LangGraph for complex workflow orchestration.",
          answer: "LangChain's agent architecture in 2025 has evolved into a modular, layered system where agents specialize in planning, execution, communication, and evaluation. Implementation involves creating WorkflowState with TypedDict containing messages, current_step, results, and metadata. Define specialized agents: PlannerAgent for creating execution plans, ExecutorAgent for executing plans, and EvaluatorAgent for scoring results. Build the graph using StateGraph, add nodes for each agent, define edges (planner→executor→evaluator→END), set entry point, and compile the workflow."
        },
        {
          id: 2,
          question: "Implement a sophisticated RAG system with re-ranking and query expansion.",
          answer: "In 2025, RAG is evolving rapidly with innovations like Long RAG (25,000+ tokens) and Adaptive RAG (learns from feedback). Implementation uses AdvancedRAGSystem with hybrid retrieval (Vector + BM25), EnsembleRetriever with weighted retrievers [0.7, 0.3], RankGPTRetriever for re-ranking, query expansion generating 3 variations, retrieve_with_expansion for multiple queries, and adaptive_retrieval that adjusts strategy based on feedback scores."
        },
        {
          id: 3,
          question: "How would you implement long-term memory for agents across sessions?",
          answer: "Integration between MongoDB and LangGraph allows agents to remember across sessions. Implementation includes PersistentAgentMemory with database_connection and user_id, store_interaction method saving input/output with embeddings, retrieve_relevant_memories using vector similarity search with $vectorSearch aggregation, get_conversation_summary for recent interactions, and LongTermMemoryAgent that retrieves memories, constructs enhanced prompts with conversation context, and stores new interactions."
        },
        {
          id: 4,
          question: "Explain how to implement custom embeddings and vector store optimizations.",
          answer: "HybridEmbeddings combines multiple embedding strategies with weighted combination of primary and secondary embeddings. OptimizedVectorStore uses HNSW index with faiss.IndexHNSWFlat for better performance, batch document addition with numpy arrays, L2 normalization for cosine similarity, metadata and text storage separation, similarity_search_with_score for optimized queries, and create_filtered_index for specialized searches with filter criteria."
        },
        {
          id: 5,
          question: "How would you implement a production-ready LangChain application with monitoring and observability?",
          answer: "Production implementation uses ProductionCallbackHandler for comprehensive monitoring with Prometheus metrics (REQUEST_COUNT, REQUEST_DURATION, TOKEN_USAGE, ACTIVE_REQUESTS), structured logging with session tracking, on_llm_start/end/error methods for lifecycle monitoring, DistributedTracing for OpenTelemetry-style tracing with span management, start_span/add_span_attribute/end_span methods, and comprehensive error handling with duration tracking and status monitoring."
        },
        {
          id: 6,
          question: "How do you implement advanced RAG techniques like query routing and multi-step reasoning?",
          answer: "Advanced RAG implements query routing to determine optimal retrieval strategy, multi-step reasoning for complex queries, query decomposition breaking complex questions into sub-queries, context compression to fit more relevant information, and result synthesis combining multiple retrieval results. Use conditional chains, query classifiers, and iterative refinement processes."
        },
        {
          id: 7,
          question: "What are the architectural patterns for building scalable LangChain applications?",
          answer: "Scalable architectures use microservices pattern with separate services for different LangChain components, event-driven architecture for async processing, CQRS pattern separating read/write operations, circuit breaker patterns for fault tolerance, load balancing across multiple LLM providers, horizontal scaling with stateless components, and caching strategies at multiple levels."
        },
        {
          id: 8,
          question: "How do you implement advanced agent coordination and communication patterns?",
          answer: "Advanced coordination uses message passing between agents, shared state management, role-based agent specialization, hierarchical agent structures with supervisor-worker patterns, consensus mechanisms for multi-agent decisions, conflict resolution strategies, and communication protocols defining agent interaction standards."
        },
        {
          id: 9,
          question: "What are the security considerations and implementations for production LangChain systems?",
          answer: "Security implementations include input sanitization and validation, prompt injection prevention, secure API key management with rotation, rate limiting and throttling, audit logging for compliance, data privacy protection, secure communication channels, access control and authentication, vulnerability scanning, and security monitoring with anomaly detection."
        },
        {
          id: 10,
          question: "How do you optimize LangChain applications for cost and performance at enterprise scale?",
          answer: "Enterprise optimization includes intelligent model selection based on query complexity, token usage optimization with compression techniques, caching strategies at multiple levels, batch processing for efficiency, async processing patterns, resource pooling and connection management, performance monitoring and alerting, cost tracking and budgeting, A/B testing for optimization, and auto-scaling based on demand patterns."
        }
      ]
    }
  },
  langgraph: {
    name: "LangGraph",
    description: "Agent orchestration framework",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is LangGraph?",
          answer: "LangGraph is a low-level agent orchestration framework that provides durable execution and fine-grained control for running complex agentic systems in production."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How does LangGraph differ from traditional LangChain agents?",
          answer: "LangGraph offers stateful, durable, observable agents with streaming support, better error handling, and more sophisticated workflow orchestration compared to traditional agents."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you design multi-agent systems using LangGraph?",
          answer: "Create specialized agents for different tasks, define state management, implement graph-based workflows, and coordinate multiple agents with proper orchestration patterns."
        }
      ]
    }
  },
  mcp: {
    name: "MCP",
    description: "Model Context Protocol",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is MCP?",
          answer: "MCP (Model Context Protocol) is a protocol for managing context and communication between different components in AI systems."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How does MCP help in AI system integration?",
          answer: "MCP provides standardized interfaces for context sharing, enabling better integration between different AI models and components."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you implement MCP in production systems?",
          answer: "Implement proper protocol handlers, ensure secure context transmission, handle version compatibility, and maintain performance standards."
        }
      ]
    }
  },
  rag: {
    name: "RAG",
    description: "Retrieval-Augmented Generation",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is RAG?",
          answer: "RAG (Retrieval-Augmented Generation) combines retrieval from external data sources with LLM generation to produce grounded, accurate answers."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How do you optimize RAG performance?",
          answer: "Optimize chunk size, improve retrieval accuracy, implement re-ranking, use hybrid search approaches, and fine-tune embedding models."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you scale RAG to enterprise level?",
          answer: "Implement distributed vector stores, use advanced indexing strategies, implement caching layers, and ensure high availability and fault tolerance."
        }
      ]
    }
  },
  vectorstore: {
    name: "Vector Store",
    description: "Vector database for embeddings",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is a Vector Store?",
          answer: "A Vector Store is a database that stores and retrieves document embeddings for similarity search, enabling semantic search capabilities."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How do you choose the right vector database?",
          answer: "Consider factors like scale, performance requirements, query types, integration capabilities, and cost when selecting vector databases."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you optimize vector store performance?",
          answer: "Implement proper indexing strategies, optimize embedding dimensions, use appropriate distance metrics, and implement effective caching mechanisms."
        }
      ]
    }
  },
  fastapi: {
    name: "FastAPI",
    description: "Modern Python web framework",
    questions: {
      easy: [
        {
          id: 1,
          question: "What is FastAPI?",
          answer: "FastAPI is a modern, fast Python web framework for building APIs with automatic interactive documentation and type hints."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How do you implement authentication in FastAPI?",
          answer: "Use OAuth2, JWT tokens, dependency injection for authentication, and implement proper security middleware."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you optimize FastAPI for production?",
          answer: "Implement async operations, use proper middleware, optimize database connections, implement caching, and ensure proper error handling."
        }
      ]
    }
  },
  backend: {
    name: "Backend Development",
    description: "Backend system design and development",
    questions: {
      easy: [
        {
          id: 1,
          question: "What are the key principles of backend development?",
          answer: "Key principles include scalability, security, maintainability, performance optimization, and proper API design."
        }
      ],
      medium: [
        {
          id: 1,
          question: "How do you design scalable backend systems?",
          answer: "Use microservices architecture, implement proper caching, design for horizontal scaling, and use load balancing strategies."
        }
      ],
      hard: [
        {
          id: 1,
          question: "How do you handle high-traffic backend systems?",
          answer: "Implement distributed systems, use message queues, implement proper monitoring, use CDNs, and design for fault tolerance."
        }
      ]
    }
  }
};
